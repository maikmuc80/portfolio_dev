import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DEFAULT_LANG, LANGS, Lang, TRANSLATIONS, TranslationKey } from './i18n';

const STORAGE_KEY = 'portfolio-lang';

/**
 * Language switching through a signal.
 *
 * The app runs zoneless: `t()` reads `lang()` while a template renders, so
 * Angular picks up the dependency and re-renders on a language change by
 * itself — no reload and no pipe needed.
 */
@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(readStoredLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      this.title.setTitle(this.t('meta.title'));
      this.meta.updateTag({ name: 'description', content: this.t('meta.description') });
      writeStoredLang(lang);
    });
  }

  /**
   * Defined as an arrow property so components can hand it straight to the
   * template: `protected readonly t = inject(TranslationService).t;`
   */
  readonly t = (key: TranslationKey): string => TRANSLATIONS[this.lang()][key];

  /** Like `t`, but also replaces placeholders of the form `{{name}}`. */
  readonly tp = (key: TranslationKey, params: Record<string, string | number>): string =>
    this.t(key).replace(/\{\{(\w+)\}\}/g, (match, name: string) =>
      name in params ? String(params[name]) : match,
    );

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }
}

function readStoredLang(): Lang {
  const stored = safeStorage()?.getItem(STORAGE_KEY);
  if (isLang(stored)) {
    return stored;
  }
  const browser = navigator.language?.slice(0, 2).toLowerCase();
  return isLang(browser) ? browser : DEFAULT_LANG;
}

function writeStoredLang(lang: Lang): void {
  safeStorage()?.setItem(STORAGE_KEY, lang);
}

/** Some browsers block localStorage in private mode. */
function safeStorage(): Storage | null {
  try {
    return localStorage;
  } catch {
    return null;
  }
}

function isLang(value: string | null | undefined): value is Lang {
  return !!value && (LANGS as readonly string[]).includes(value);
}
