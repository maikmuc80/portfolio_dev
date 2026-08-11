/**
 * Structured portfolio content.
 *
 * Translatable text does not live here but in i18n.ts — this file only holds
 * data that is identical in both languages (names, paths, links, tags).
 */

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  /** Internal key, also the prefix of the matching i18n keys. */
  key: string;
  title: string;
  tags: string[];
  /** Base name in public/assets/img/projects/ without the width suffix. */
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
  /** Initials in the logo — Figma shows [SE] there for the sample name. */
  initials: 'MR',
  email: 'kontakt@maik-radke.de',
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
  { name: 'REST-API', icon: 'rest-api' },
  { name: 'WordPress', icon: 'wordpress' },
];

/**
 * Empty fields are skipped by the template: no image means no screenshot,
 * no URL means no live or Github button.
 */
export const PROJECTS: Project[] = [
  {
    key: 'elpolloloco',
    title: 'El Pollo Loco',
    tags: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
    image: 'elpolloloco',
    /* No live URL yet — GitHub Pages is switched off for the repository. */
    liveUrl: '',
    githubUrl: 'https://github.com/maikmuc80/elpolloloco',
  },
];

/** Name here, role and quote in i18n.ts under `references.<key>.*`. */
export const REFERENCES: Reference[] = [
  { key: 'ref1', name: '—' },
  { key: 'ref2', name: '—' },
  { key: 'ref3', name: '—' },
];

export const SOCIALS: SocialLink[] = [
  { key: 'github', href: 'https://github.com/maikmuc80', icon: 'github' },
  { key: 'mail', href: `mailto:${PROFILE.email}`, icon: 'mail' },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/maik-radke-396bb7158/',
    icon: 'linkedin',
  },
];

/**
 * Navigation anchor targets, in page order. 'references' is left out while
 * that section is hidden — see home.html.
 */
export const SECTIONS = ['about', 'skills', 'portfolio', 'contact'] as const;
