import { call, put, select } from 'redux-saga/effects';

import CONFIG from '../config/env';
import { cacheSlice } from '../redux/slices';
import {
  setLocalizationBundle,
  getTranslations,
} from '../services/localization';

export function* initLocalizationSaga() {
  const locales = CONFIG.LANGUAGES;

  for (const language of locales) {
    const translations: Record<string, string> = yield call(
      getTranslations,
      language,
    );
    if (translations) {
      yield put(
        cacheSlice.actions.saveTranslations({ [language]: { translations } }),
      );
    } else {
      const reduxTranslations: Record<string, string> = yield select(
        state => state.cache.translations[language].translations,
      );

      yield call(setLocalizationBundle, language, reduxTranslations);
    }
  }
}
