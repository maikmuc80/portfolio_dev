/**
 * Strukturierte Inhalte des Portfolios.
 *
 * Übersetzbare Texte stehen NICHT hier, sondern in i18n.ts — hier liegen nur
 * Daten, die in beiden Sprachen gleich sind (Namen, Pfade, Links, Tags).
 */

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  /** Interner Schlüssel, zugleich Präfix der i18n-Keys. */
  key: string;
  title: string;
  tags: string[];
  /** Basisname in public/assets/img/projects/ ohne Breiten-Suffix. */
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Reference {
  key: string;
  name: string;
}

export interface SocialLink {
  key: string;
  href: string;
  icon: string;
}

export const PROFILE = {
  name: 'Maik Radke',
  /** Kürzel im Logo — im Figma steht dort [SE] für den Muster-Namen. */
  initials: 'MR',
  email: 'maikmuc80@gmail.com',
  copyrightYear: new Date().getFullYear(),
};

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'angular' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Git', icon: 'git' },
  { name: 'Scrum', icon: 'scrum' },
  { name: 'REST-API', icon: 'rest-api' },
  { name: 'Material Design', icon: 'material-design' },
];

/**
 * Leere Felder werden im Template übersprungen: ohne Bild kein Screenshot,
 * ohne URL kein Live- bzw. Github-Button.
 */
export const PROJECTS: Project[] = [
  {
    key: 'elpoco',
    title: 'Elpoco',
    tags: [],
    image: '',
    liveUrl: '',
    githubUrl: '',
  },
];

/**
 * PLATZHALTER: Die Figma-Vorlage enthält erfundene Zitate unter erfundenen
 * Namen. Die sind hier bewusst nicht übernommen — trag echte Rückmeldungen ein
 * (Name hier, Rolle und Zitat in i18n.ts unter `references.<key>.*`).
 */
export const REFERENCES: Reference[] = [
  { key: 'ref1', name: '—' },
  { key: 'ref2', name: '—' },
  { key: 'ref3', name: '—' },
];

export const SOCIALS: SocialLink[] = [
  { key: 'github', href: 'https://github.com/', icon: 'github' },
  { key: 'mail', href: `mailto:${PROFILE.email}`, icon: 'mail' },
  { key: 'linkedin', href: 'https://www.linkedin.com/', icon: 'linkedin' },
];

/** Anker-Ziele der Navigation, in Reihenfolge der Seite. */
export const SECTIONS = ['about', 'skills', 'portfolio', 'references', 'contact'] as const;
