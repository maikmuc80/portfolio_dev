import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DEFAULT_LANG, LANGS, Lang, TRANSLATIONS, TranslationKey } from './i18n';

const STORAGE_KEY = 'portfolio-lang';

/**
 * Sprachumschaltung über ein Signal.
 *
 * Die App läuft zoneless: `t()` liest `lang()` während des Template-Renderings,
 * dadurch registriert Angular die Abhängigkeit und rendert bei einem
 * Sprachwechsel automatisch neu — ohne Reload und ohne Pipe.
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
   * Als Arrow-Property definiert, damit Komponenten sie direkt ins Template
   * hängen können: `protected readonly t = inject(TranslationService).t;`
   */
  readonly t = (key: TranslationKey): string => TRANSLATIONS[this.lang()][key];

  /** Wie `t`, ersetzt zusätzlich Platzhalter der Form `{{name}}`. */
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

/** localStorage ist im privaten Modus mancher Browser gesperrt. */
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
