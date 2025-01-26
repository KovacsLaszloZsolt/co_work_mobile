import map from './map';
import tabs from './tabs';
import { TranslationKeys } from './translations.type';

export const resources = {
  en: {
    translation: {
      map: map.en,
      tabs: tabs.en,
    },
  },
  /*hu: {
      translation: {},
    },*/
};

export type TranslationKey = TranslationKeys<typeof resources.en.translation>;
