import { LANGS, TRANSLATIONS } from './i18n';

describe('i18n', () => {
  it('carries the same keys in every language', () => {
    const reference = Object.keys(TRANSLATIONS.de).sort();

    for (const lang of LANGS) {
      expect(Object.keys(TRANSLATIONS[lang]).sort()).toEqual(reference);
    }
  });

  // A key that exists but is empty passes the type check and then renders as a
  // blank spot on the page.
  it('has no empty strings', () => {
    for (const lang of LANGS) {
      for (const [key, value] of Object.entries(TRANSLATIONS[lang])) {
        expect(value.trim(), `${lang}.${key}`).not.toBe('');
      }
    }
  });
});
