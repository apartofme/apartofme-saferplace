import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import Api from '../graphql/index';

i18n.use(initReactI18next).init();

export const getTranslations = async (locale: string) => {
  try {
    const translations = await new Api().getAllTranslations(locale);
    setLocalizationBundle(locale, translations);
    return translations;
  } catch {
    return;
  }
};

export const setLocalizationBundle = (
  locale: string,
  translations: Record<string, string>,
) => {
  try {
    i18n.addResourceBundle(locale, 'translation', translations, true, true);
  } catch {}
};

export default i18n;
