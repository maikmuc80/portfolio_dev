<?php

declare(strict_types=1);

/**
 * Contact form endpoint. The Angular front end posts JSON here
 * (see src/app/sections/contact/contact.ts).
 *
 * Deliberately no CORS headers: the form is served from the same origin, so it
 * needs none. An open Access-Control-Allow-Origin would let any website drive
 * this endpoint and relay spam through our authenticated SMTP account, which
 * gets the mailbox suspended and damages the domain's sending reputation.
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

const MAX_NAME_BYTES    = 200;
const MAX_MESSAGE_BYTES = 10000;
const RATE_LIMIT        = 5;     // messages ...
const RATE_WINDOW       = 3600;  // ... per hour, per IP

/** Answer with an error and stop. Never leaks internal detail to the client. */
function fail(int $status, string $error): never
{
    http_response_code($status);
    echo json_encode(['success' => false, 'error' => $error]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    fail(405, 'Method not allowed');
}

// Recipient comes from the environment — the repository is public, and a
// hard-coded address is a gift to address harvesters.
$recipient = (string) (getenv('CONTACT_EMAIL') ?: '');
if (!filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
    error_log('sendMail: CONTACT_EMAIL is unset or not a valid address');
    fail(500, 'Mail is not configured');
}

// --- rate limit -------------------------------------------------------------
// A public mail endpoint is found by bots within days. File-based is enough
// here.
//
// The IP is keyed with a secret salt, not hashed bare: a plain SHA-256 of an
// IPv4 address is reversible by running through all ~4.3 billion of them, so
// an unsalted digest is pseudonymous data, not anonymous. With the salt the
// counter name cannot be traced back to a visitor.
// The salt normally comes from the environment. When it does not — mod_php
// does not always see what the entrypoint exported — PHP makes its own and
// keeps it in a file. Earlier this refused to send without the variable, which
// turned a spam-guard detail into a dead contact form.
$salt     = (string) (getenv('RATE_LIMIT_SALT') ?: '');
$saltFile = sys_get_temp_dir() . '/contact-salt';

if ($salt === '' && is_readable($saltFile)) {
    $salt = trim((string) file_get_contents($saltFile));
}

if ($salt === '') {
    $salt = bin2hex(random_bytes(32));
    if (@file_put_contents($saltFile, $salt, LOCK_EX) !== false) {
        @chmod($saltFile, 0600);
    }
}

$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');

// Distinct from the salt file, so the sweep below cannot delete the salt and
// silently reset every counter.
$prefix     = sys_get_temp_dir() . '/contact-rl-';
$counter    = $prefix . hash_hmac('sha256', $ip, $salt);
$timestamps = [];

// Sweep expired counters. Without this the files pile up in the temp directory
// for as long as the container lives, which contradicts the one-hour retention
// the privacy policy states.
foreach (glob($prefix . '*') ?: [] as $stale) {
    if (@filemtime($stale) < time() - RATE_WINDOW) {
        @unlink($stale);
    }
}

if (is_readable($counter)) {
    $decoded = json_decode((string) file_get_contents($counter), true);
    $timestamps = array_filter(
        is_array($decoded) ? $decoded : [],
        static fn ($t): bool => is_int($t) && $t > time() - RATE_WINDOW,
    );
}

if (count($timestamps) >= RATE_LIMIT) {
    header('Retry-After: ' . RATE_WINDOW);
    fail(429, 'Too many requests');
}

// --- read and validate ------------------------------------------------------
$params = json_decode((string) file_get_contents('php://input'));
if (json_last_error() !== JSON_ERROR_NONE || !is_object($params)) {
    fail(400, 'Invalid JSON');
}

$name    = trim((string) ($params->name ?? ''));
$email   = trim((string) ($params->email ?? ''));
$message = trim((string) ($params->message ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(400, 'Invalid input data');
}

if (strlen($name) > MAX_NAME_BYTES || strlen($message) > MAX_MESSAGE_BYTES) {
    fail(400, 'Input too long');
}

// --- compose ----------------------------------------------------------------
$safeName    = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safeEmail   = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$body = "<strong>Name:</strong> {$safeName}<br>\n"
      . "<strong>Email:</strong> {$safeEmail}<br><br>\n"
      . "<strong>Message:</strong><br>\n{$safeMessage}\n";

// $email already passed FILTER_VALIDATE_EMAIL, which rejects newlines — so it
// cannot smuggle extra headers in through Reply-To. The envelope sender is set
// by msmtp from its own config, so no additional_params are needed here.
// The From header has to name the mailbox we authenticate as, not the one we
// deliver to. IONOS — like most providers — refuses a message whose sender is
// a different address than the SMTP account, which surfaces here as mail()
// returning false. SMTP_FROM also feeds msmtp's envelope sender, so both agree.
$sender = (string) (getenv('SMTP_FROM') ?: '');
if (!filter_var($sender, FILTER_VALIDATE_EMAIL)) {
    $sender = (string) (getenv('SMTP_USER') ?: '');
}
if (!filter_var($sender, FILTER_VALIDATE_EMAIL)) {
    $sender = $recipient;
}

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    'From: Website Kontakt <' . $sender . '>',
    // Hitting reply answers the visitor, not our own send-only mailbox.
    'Reply-To: ' . $email,
]);

if (!mail($recipient, 'Website Contact Form', $body, $headers)) {
    error_log('sendMail: mail() failed — check the msmtp configuration');
    fail(500, 'Mail delivery failed');
}

// Only successful sends count against the limit.
$timestamps[] = time();
file_put_contents($counter, json_encode(array_values($timestamps)), LOCK_EX);

echo json_encode(['success' => true]);
