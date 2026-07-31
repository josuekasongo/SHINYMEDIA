import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';

const resources = {
  fr: { translation: fr },
  en: { translation: en },
  es: { translation: es },
  zh: { translation: zh },
  ar: { translation: ar },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // langue par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
