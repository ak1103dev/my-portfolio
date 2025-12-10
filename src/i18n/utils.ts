import { translations } from './translations';

export type Language = keyof typeof translations;
export const LANGUAGES = Object.keys(translations) as Language[];
export const DEFAULT_LANG: Language = 'en';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (LANGUAGES.includes(lang as Language)) {
    return lang as Language;
  }
  return DEFAULT_LANG;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let result: any = translations[lang];
    for (const k of keys) {
      result = result[k];
      if (result === undefined) {
        // Fallback to default language if key not found
        let fallbackResult: any = translations[DEFAULT_LANG];
        for (const fk of keys) {
            fallbackResult = fallbackResult[fk];
            if (fallbackResult === undefined) {
                return key; // Return the key itself if not found in fallback
            }
        }
        return fallbackResult;
      }
    }
    return result;
  };
}
