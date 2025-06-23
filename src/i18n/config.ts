
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import svTranslations from './locales/sv.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  sv: {
    translation: svTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
