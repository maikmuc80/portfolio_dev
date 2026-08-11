#!/bin/sh
# Writes the msmtp config at container start from the environment, so the SMTP
# credentials never end up in an image layer (where `docker history` would
# expose them). Then hands over to Apache.
set -eu

missing=''
for var in SMTP_HOST SMTP_PORT SMTP_USER SMTP_PASS CONTACT_EMAIL; do
  eval "value=\${$var:-}"
  if [ -z "$value" ]; then
    missing="$missing $var"
  fi
done

# Fail loudly here rather than let the container come up healthy and only break
# when a visitor submits the form.
if [ -n "$missing" ]; then
  echo "entrypoint: missing environment variable(s):$missing" >&2
  echo "entrypoint: set them in Coolify under Environment Variables." >&2
  exit 1
fi

# Salt for the contact form's rate-limit keys. Generated here when it is not
# supplied, so no deployment silently falls back to a bare hash of the visitor's
# IP. A fresh salt per container start only resets the counters, which is the
# harmless direction to fail in.
if [ -z "${RATE_LIMIT_SALT:-}" ]; then
  RATE_LIMIT_SALT=$(head -c 32 /dev/urandom | od -An -tx1 | tr -d ' \n')
fi
export RATE_LIMIT_SALT

cat > /etc/msmtprc <<EOF
defaults
auth           on
tls            on
tls_starttls   on
tls_trust_file /etc/ssl/certs/ca-certificates.crt
logfile        -

account        default
host           ${SMTP_HOST}
port           ${SMTP_PORT}
from           ${SMTP_FROM:-$CONTACT_EMAIL}
user           ${SMTP_USER}
password       ${SMTP_PASS}
EOF

# msmtp refuses a config that holds a password and is group- or world-readable.
# PHP runs as www-data and invokes msmtp, so www-data must be the owner — root
# with mode 600 would lock out the very process that needs to read it.
chown www-data:www-data /etc/msmtprc
chmod 600 /etc/msmtprc

exec "$@"
