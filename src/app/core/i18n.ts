/**
 * Alle sichtbaren Texte in Deutsch und Englisch.
 *
 * Die englischen Fassungen sind die Originaltexte aus dem Figma-Design,
 * die deutschen die Übersetzung dazu. Zum Anpassen der Inhalte reicht es,
 * hier zu editieren — die Templates greifen ausschließlich über die Keys zu.
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

  'projects.join.desc':
    'Aufgabenverwaltung nach dem Kanban-Prinzip. Aufgaben anlegen und organisieren, per Drag & Drop verschieben, Nutzer und Kategorien zuweisen.',
  'projects.sharkie.desc':
    'Ein einfaches Jump-and-Run auf objektorientierter Basis. Hilf Sharkie, Münzen und Giftflaschen zu sammeln, um gegen den Orca zu bestehen.',
  'projects.dabubble.desc':
    'Ein Slack-Klon: Teamkommunikation mit übersichtlicher Oberfläche, Nachrichten in Echtzeit und klar organisierten Channels.',
  'projects.pokedex.desc':
    'Auf Basis der PokéAPI — eine schlanke Bibliothek, die Pokémon-Informationen bereitstellt und katalogisiert.',

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
  'contact.errorName': 'Bitte gib deinen Namen ein.',
  'contact.errorEmail': 'Bitte gib eine gültige E-Mail-Adresse ein.',
  'contact.errorMessage': 'Bitte schreib mir eine Nachricht.',
  'contact.errorPrivacy': 'Bitte akzeptiere die Datenschutzerklärung.',
  'contact.success': 'Danke! Deine Nachricht ist angekommen.',
  'contact.demoHint':
    'Hinweis: Das Formular versendet noch nichts — es fehlt die Anbindung an einen Mail-Dienst.',

  'footer.legal': 'Impressum',
  'footer.privacy': 'Datenschutz',
  'footer.top': 'Nach oben',

  'legal.title': 'Impressum',
  'legal.responsible': 'Angaben gemäß § 5 TMG',
  'legal.contact': 'Kontakt',
  'legal.back': 'Zurück zur Startseite',

  'privacy.title': 'Datenschutzerklärung',
  'privacy.placeholder':
    'PLATZHALTER — hier muss der rechtsverbindliche Text deiner Datenschutzerklärung stehen.',
  'privacy.back': 'Zurück zur Startseite',
} as const;

/** Alle Keys, die es geben darf. */
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

  'projects.join.desc':
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
  'projects.sharkie.desc':
    'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
  'projects.dabubble.desc':
    'This app is a Slack clone. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
  'projects.pokedex.desc':
    'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',

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
  'contact.errorName': 'Please enter your name.',
  'contact.errorEmail': 'Please enter a valid email address.',
  'contact.errorMessage': 'Please write me a message.',
  'contact.errorPrivacy': 'Please accept the privacy policy.',
  'contact.success': 'Thank you! Your message came through.',
  'contact.demoHint':
    "Note: the form doesn't send anything yet — it still needs to be wired to a mail service.",

  'footer.legal': 'Legal notice',
  'footer.privacy': 'Privacy policy',
  'footer.top': 'Back to top',

  'legal.title': 'Legal notice',
  'legal.responsible': 'Information according to § 5 TMG',
  'legal.contact': 'Contact',
  'legal.back': 'Back to home',

  'privacy.title': 'Privacy policy',
  'privacy.placeholder': 'PLACEHOLDER — your legally binding privacy policy text belongs here.',
  'privacy.back': 'Back to home',
};

export const TRANSLATIONS: Record<Lang, Record<TranslationKey, string>> = { de, en };
