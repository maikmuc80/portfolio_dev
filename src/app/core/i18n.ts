/**
 * Every visible text in German and English.
 *
 * The English versions are the original strings from the Figma design, the
 * German ones the translation. Templates only ever reach for the keys, so
 * content changes stay in this file.
 */

export const LANGS = ['de', 'en'] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'de';

const de = {
  'meta.title': 'Maik Radke — Frontend Developer',
  'meta.description':
    'Portfolio von Maik Radke, Frontend Developer aus Berchtesgaden. Angular, TypeScript und moderne Web-Entwicklung.',

  'header.menu': 'Menü öffnen',
  'header.close': 'Menü schließen',
  'header.langLabel': 'Sprache wählen',
  'header.skipToContent': 'Zum Inhalt springen',

  'nav.about': 'Über mich',
  'nav.skills': 'Skills',
  'nav.portfolio': 'Portfolio',
  'nav.references': 'Referenzen',
  'nav.contact': 'Kontakt',
  'nav.home': 'Startseite',

  'hero.line1': 'Frontend',
  'hero.line2': 'Developer',
  'hero.scroll': 'Nach unten scrollen',

  'about.title': 'Über mich',
  'about.text':
    'Ich bin Frontend Developer und lerne aktuell an der Developer Akademie. Am Programmieren begeistert mich, aus einer Idee etwas zu bauen, das Menschen wirklich benutzen. Probleme gehe ich analytisch an: erst verstehen, dann zerlegen, dann sauber lösen. Was mich ausmacht: Ausdauer, Neugier auf neue Technologien und die Bereitschaft, im Team Verantwortung zu übernehmen.',
  'about.photoAlt': 'Porträtfoto von Maik Radke',
  'about.location': 'Zuhause in Berchtesgaden',
  'about.remote': 'Offen für Remote-Arbeit',
  'about.cta': 'Lass uns reden',

  'skills.title': 'Meine Skills',
  'skills.question': 'Du brauchst einen Skill, der hier fehlt?',
  'skills.cta': 'Schreib mir',
  'skills.closing': 'Ich lerne immer gern dazu!',

  'portfolio.title': 'Portfolio',
  'portfolio.intro':
    'Hier eine Auswahl meiner Arbeiten — schau dich um und entdecke, was ich kann.',
  'portfolio.counter': 'Projekt {{n}} von {{total}}',
  'portfolio.openLabel': '{{title}} live ansehen',

  'projects.elpoco.desc': '',

  'references.title': 'Referenzen',
  'references.intro':
    'Ich arbeite gern eigenständig und genauso gern im Team. Das sagen Kolleginnen und Kollegen über die Zusammenarbeit mit mir.',
  'references.ref1.role': 'Team-Partner:in',
  'references.ref1.text': 'Platzhalter — hier kommt eine echte Rückmeldung aus deinem Team hin.',
  'references.ref2.role': 'Team-Partner:in',
  'references.ref2.text': 'Platzhalter — hier kommt eine echte Rückmeldung aus deinem Team hin.',
  'references.ref3.role': 'Frontend Engineer',
  'references.ref3.text': 'Platzhalter — hier kommt eine echte Rückmeldung aus deinem Team hin.',

  'contact.title': 'Sag Hallo!',
  'contact.lead': 'Lust auf ein neues Projekt?',
  'contact.sub': 'Melde dich — lass uns über deine Idee sprechen und sie umsetzen.',
  'contact.name': 'Dein Name',
  'contact.email': 'Deine E-Mail',
  'contact.message': 'Deine Nachricht',
  'contact.privacyPre': 'Ich habe die',
  'contact.privacyLink': 'Datenschutzerklärung',
  'contact.privacyPost': 'gelesen und stimme der Verarbeitung meiner Daten zu.',
  'contact.send': 'Nachricht senden',
  'contact.sending': 'Wird gesendet …',
  'contact.errorName': 'Bitte gib deinen Namen ein.',
  'contact.errorEmail': 'Bitte gib eine gültige E-Mail-Adresse ein.',
  'contact.errorMessage': 'Bitte schreib mir eine Nachricht.',
  'contact.errorPrivacy': 'Bitte akzeptiere die Datenschutzerklärung.',
  'contact.success': 'Danke! Deine Nachricht ist angekommen.',
  'contact.error': 'Das hat leider nicht geklappt. Bitte versuch es später noch einmal.',

  'footer.legal': 'Impressum',
  'footer.privacy': 'Datenschutz',
  'footer.top': 'Nach oben',

  'social.github': 'GitHub-Profil',
  'social.linkedin': 'LinkedIn-Profil',
  'social.mail': 'E-Mail schreiben',

  'legal.title': 'Impressum',
  'legal.responsible': 'Angaben gemäß § 5 TMG',
  'legal.contact': 'Kontakt',
  'legal.back': 'Zurück zur Startseite',

  'privacy.title': 'Datenschutzerklärung',
  'privacy.intro.title': 'Datenschutz auf einen Blick',
  'privacy.intro.text':
    'Diese Website ist ein privates Portfolio. Personenbezogene Daten werden nur erhoben, wenn Sie mir über das Kontaktformular oder per E-Mail schreiben. Es kommen keine Analyse-Dienste, keine Werbenetzwerke und keine Cookies von Dritten zum Einsatz.',
  'privacy.responsible.title': 'Verantwortlicher',
  'privacy.hosting.title': 'Hosting und Server-Logfiles',
  'privacy.hosting.text':
    'Die Website wird bei einem externen Hosting-Anbieter betrieben, mit dem ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO besteht. Beim Aufruf der Seite erfasst der Server automatisch Zugriffsdaten in Logfiles: aufgerufene Seite, Datum und Uhrzeit, übertragene Datenmenge, Browsertyp, Betriebssystem und IP-Adresse. Diese Daten dienen ausschließlich dem sicheren und stabilen Betrieb der Website. Rechtsgrundlage ist das berechtigte Interesse nach Art. 6 Abs. 1 lit. f DSGVO. Die Logfiles werden nach spätestens sieben Tagen gelöscht.',
  'privacy.ssl.title': 'SSL-/TLS-Verschlüsselung',
  'privacy.ssl.text':
    'Diese Seite nutzt aus Sicherheitsgründen eine SSL- beziehungsweise TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://" beginnt und ein Schloss-Symbol zeigt. Ist die Verschlüsselung aktiv, können Dritte die Daten, die Sie an mich übermitteln, nicht mitlesen.',
  'privacy.form.title': 'Kontaktformular',
  'privacy.form.text':
    'Wenn Sie mir über das Kontaktformular schreiben, werden Ihr Name, Ihre E-Mail-Adresse und Ihr Nachrichtentext an meine E-Mail-Adresse weitergeleitet. Ich verwende diese Angaben ausschließlich, um Ihre Anfrage zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag zusammenhängt, andernfalls das berechtigte Interesse an der Beantwortung nach Art. 6 Abs. 1 lit. f DSGVO. Eine Weitergabe an Dritte findet nicht statt. Ich lösche die Daten, sobald Ihre Anfrage erledigt ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.',
  'privacy.mail.title': 'Kontakt per E-Mail',
  'privacy.mail.text':
    'Schreiben Sie mir direkt per E-Mail, gilt dasselbe: Ihre Angaben werden nur zur Bearbeitung Ihres Anliegens gespeichert und anschließend gelöscht.',
  'privacy.storage.title': 'Spracheinstellung im Browser',
  'privacy.storage.text':
    'Die Seite speichert Ihre gewählte Sprache im lokalen Speicher Ihres Browsers, damit die Auswahl beim nächsten Besuch erhalten bleibt. Es handelt sich um einen rein technischen Eintrag ohne Personenbezug, der weder an mich noch an Dritte übertragen wird. Sie können ihn jederzeit über die Einstellungen Ihres Browsers löschen.',
  'privacy.fonts.title': 'Schriftarten',
  'privacy.fonts.text':
    'Alle verwendeten Schriften liegen auf dem Server dieser Website und werden von dort geladen. Es besteht keine Verbindung zu Google Fonts oder einem anderen externen Anbieter, es werden also keine Daten an Dritte übertragen.',
  'privacy.rights.title': 'Ihre Rechte',
  'privacy.rights.text':
    'Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO), auf Berichtigung (Art. 16), auf Löschung (Art. 17), auf Einschränkung der Verarbeitung (Art. 18), auf Datenübertragbarkeit (Art. 20) sowie auf Widerspruch gegen die Verarbeitung (Art. 21). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Eine formlose Nachricht an die oben genannte Adresse genügt.',
  'privacy.complaint.title': 'Beschwerderecht',
  'privacy.complaint.text':
    'Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt, können Sie sich bei einer Aufsichtsbehörde beschweren. Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522 Ansbach.',
  'privacy.updated.title': 'Stand',
  'privacy.updated.text': 'Juli 2026',
  'privacy.back': 'Zurück zur Startseite',
} as const;

/** Every key that may exist. */
export type TranslationKey = keyof typeof de;

const en: Record<TranslationKey, string> = {
  'meta.title': 'Maik Radke — Frontend Developer',
  'meta.description':
    'Portfolio of Maik Radke, frontend developer based in Berchtesgaden, Germany. Angular, TypeScript and modern web development.',

  'header.menu': 'Open menu',
  'header.close': 'Close menu',
  'header.langLabel': 'Choose language',
  'header.skipToContent': 'Skip to content',

  'nav.about': 'About me',
  'nav.skills': 'Skills',
  'nav.portfolio': 'Portfolio',
  'nav.references': 'References',
  'nav.contact': 'Contact',
  'nav.home': 'Home',

  'hero.line1': 'Frontend',
  'hero.line2': 'Developer',
  'hero.scroll': 'Scroll down',

  'about.title': 'About me',
  'about.text':
    "I'm a frontend developer, currently training at Developer Akademie. What draws me to coding is turning an idea into something people actually use. I approach problems analytically: understand first, break it down, then solve it cleanly. What defines me: persistence, curiosity about new technologies, and a willingness to take responsibility within a team.",
  'about.photoAlt': 'Portrait photo of Maik Radke',
  'about.location': 'Based in Berchtesgaden',
  'about.remote': 'Open to work remote',
  'about.cta': "Let's talk",

  'skills.title': 'My skills',
  'skills.question': "Don't see the skill you need?",
  'skills.cta': 'Contact me',
  'skills.closing': "I'm always ready to learn!",

  'portfolio.title': 'Portfolio',
  'portfolio.intro':
    'Explore a selection of my work here — interact with projects to see my skills in action.',
  'portfolio.counter': 'Project {{n}} of {{total}}',
  'portfolio.openLabel': 'View {{title}} live',

  'projects.elpoco.desc': '',

  'references.title': 'References',
  'references.intro':
    'I thrive both independently and as part of a team. Here is what my colleagues have to say about working with me.',
  'references.ref1.role': 'Team partner',
  'references.ref1.text': 'Placeholder — a real quote from your team goes here.',
  'references.ref2.role': 'Team partner',
  'references.ref2.text': 'Placeholder — a real quote from your team goes here.',
  'references.ref3.role': 'Frontend Engineer',
  'references.ref3.text': 'Placeholder — a real quote from your team goes here.',

  'contact.title': 'Say Hi!',
  'contact.lead': 'Want to discuss a new project?',
  'contact.sub': "Say hello! Let's discuss your ideas and make it happen.",
  'contact.name': 'Your name',
  'contact.email': 'Your email',
  'contact.message': 'Your message',
  'contact.privacyPre': "I've read the",
  'contact.privacyLink': 'privacy policy',
  'contact.privacyPost': 'and agree to the processing of my data as outlined.',
  'contact.send': 'Send message',
  'contact.sending': 'Sending …',
  'contact.errorName': 'Please enter your name.',
  'contact.errorEmail': 'Please enter a valid email address.',
  'contact.errorMessage': 'Please write me a message.',
  'contact.errorPrivacy': 'Please accept the privacy policy.',
  'contact.success': 'Thank you! Your message came through.',
  'contact.error': "That didn't work, unfortunately. Please try again later.",

  'footer.legal': 'Legal notice',
  'footer.privacy': 'Privacy policy',
  'footer.top': 'Back to top',

  'social.github': 'GitHub profile',
  'social.linkedin': 'LinkedIn profile',
  'social.mail': 'Write an email',

  'legal.title': 'Legal notice',
  'legal.responsible': 'Information according to § 5 TMG',
  'legal.contact': 'Contact',
  'legal.back': 'Back to home',

  'privacy.title': 'Privacy policy',
  'privacy.intro.title': 'Privacy at a glance',
  'privacy.intro.text':
    'This website is a private portfolio. Personal data is only collected when you write to me through the contact form or by email. No analytics services, no advertising networks and no third-party cookies are used.',
  'privacy.responsible.title': 'Controller',
  'privacy.hosting.title': 'Hosting and server log files',
  'privacy.hosting.text':
    'This website runs with an external hosting provider, with whom a data processing agreement under Art. 28 GDPR is in place. Whenever the site is opened, the server automatically records access data in log files: the page requested, date and time, amount of data transferred, browser type, operating system and IP address. This data serves the secure and stable operation of the website only. The legal basis is legitimate interest under Art. 6(1)(f) GDPR. Log files are deleted after seven days at the latest.',
  'privacy.ssl.title': 'SSL/TLS encryption',
  'privacy.ssl.text':
    'For security reasons this site uses SSL or TLS encryption. You can recognise an encrypted connection by the browser address bar starting with "https://" and showing a padlock icon. While encryption is active, the data you send me cannot be read by third parties.',
  'privacy.form.title': 'Contact form',
  'privacy.form.text':
    'When you write to me through the contact form, your name, email address and message are forwarded to my email address. I use these details solely to answer your enquiry. The legal basis is Art. 6(1)(b) GDPR where your enquiry relates to a contract, otherwise the legitimate interest in responding under Art. 6(1)(f) GDPR. The data is not passed on to third parties. I delete it as soon as your enquiry has been dealt with and no statutory retention periods apply.',
  'privacy.mail.title': 'Contact by email',
  'privacy.mail.text':
    'If you email me directly, the same applies: your details are stored only to handle your enquiry and are deleted afterwards.',
  'privacy.storage.title': 'Language setting in your browser',
  'privacy.storage.text':
    'The site stores your chosen language in your browser’s local storage so that your choice is kept for your next visit. This is a purely technical entry with no personal reference; it is transmitted neither to me nor to third parties. You can delete it at any time through your browser settings.',
  'privacy.fonts.title': 'Fonts',
  'privacy.fonts.text':
    'All fonts used are stored on this website’s own server and loaded from there. There is no connection to Google Fonts or any other external provider, so no data is transferred to third parties.',
  'privacy.rights.title': 'Your rights',
  'privacy.rights.text':
    'You have the right at any time to obtain information about the data stored about you (Art. 15 GDPR), to rectification (Art. 16), to erasure (Art. 17), to restriction of processing (Art. 18), to data portability (Art. 20) and to object to processing (Art. 21). You may withdraw consent you have given at any time with effect for the future. An informal message to the address above is sufficient.',
  'privacy.complaint.title': 'Right to lodge a complaint',
  'privacy.complaint.text':
    'If you believe that the processing of your data infringes the GDPR, you may lodge a complaint with a supervisory authority. The competent authority is the Bavarian Data Protection Authority (Bayerisches Landesamt für Datenschutzaufsicht), Promenade 18, 91522 Ansbach, Germany.',
  'privacy.updated.title': 'Last updated',
  'privacy.updated.text': 'July 2026',
  'privacy.back': 'Back to home',
};

export const TRANSLATIONS: Record<Lang, Record<TranslationKey, string>> = { de, en };
