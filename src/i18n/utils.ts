import { ui, languages, type Lang } from './ui';

export { type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return 'ar';
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['ar']): string {
    return ui[lang][key] || ui['ar'][key];
  };
}

export function getLocalePath(lang: Lang): string {
  return lang === 'ar' ? '/' : '/en/';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'ar' ? 'en' : 'ar';
}

export function getAlternateLabel(lang: Lang): string {
  const alt = getAlternateLang(lang);
  return languages[alt];
}
