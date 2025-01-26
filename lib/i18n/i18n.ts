export const LOCALES = {
  en: 'en',
  /*hu: 'hu',*/
} as const;
export type SupportedLocale = (typeof LOCALES)[keyof typeof LOCALES];

export const LOCALE_KEY = 'locale';

export const isSupportedLocale = (
  locale: string,
): locale is SupportedLocale => {
  return Object.values(LOCALES).includes(locale as SupportedLocale);
};
