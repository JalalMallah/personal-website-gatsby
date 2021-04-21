import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translations: require('./locales/en/translations.json'),
      },
      pl: {
        translations: require('./locales/pl/translations.json'),
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    returnObjects: true,
  });

i18n.languages = ['en', 'pl'];

export default i18n;
