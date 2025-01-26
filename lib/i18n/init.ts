import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from '../../translations';
import { isSupportedLocale, LOCALE_KEY, LOCALES } from './i18n';

const initI18next = async () => {
  let locale;
  const storedLocale = await AsyncStorage.getItem(LOCALE_KEY);

  if (storedLocale && isSupportedLocale(storedLocale)) {
    locale = storedLocale;
  }

  const deviceLocales = getLocales().map((locale) => locale.languageCode);

  for (const deviceLocale of deviceLocales) {
    if (deviceLocale && isSupportedLocale(deviceLocale)) {
      locale = deviceLocale;
    }
  }

  if (!locale) {
    locale = LOCALES.en;
  }

  i18next.use(initReactI18next).init({
    resources,
    supportedLngs: Object.values(LOCALES),
    fallbackLng: LOCALES.en,
    ns: ['translation'],
    defaultNS: 'translation',

    compatibilityJSON: 'v4',
    interpolation: { escapeValue: false },
  });
};

initI18next();

export default initI18next;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: keyof typeof resources.en;
    resources: typeof resources.en;
  }
}
