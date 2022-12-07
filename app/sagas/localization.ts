import { call, delay, put, select } from 'redux-saga/effects';

import CONFIG from '../config/env';
import { cacheSlice } from '../redux/slices';
import {
  setLocalizationBundle,
  getTranslations,
} from '../services/localization';
import { getIsConnected } from '../utils';

export function* initLocalizationSaga() {
  const locales = CONFIG.LANGUAGES;

  // *** Fix for localization: the correct value of the selected language from the state does not have time to load
  // intentionally
  yield delay(10);
  const settingsLanguage: string = yield select(
    state => state.settings.settings.language,
  );

  const isConnected: boolean = yield call(getIsConnected);

  if (isConnected) {
    for (const language of locales) {
      const translations: Record<string, string> = yield call(
        getTranslations,
        language,
      );
      if (translations) {
        yield put(
          cacheSlice.actions.saveTranslationsSuccess({
            [language]: { translations },
          }),
        );

        const currentLanguageTranslation: Record<string, string> = yield select(
          state => state.cache.translations[settingsLanguage].translations,
        );
        yield call(setLocalizationBundle, language, currentLanguageTranslation);
      } else {
        const reduxTranslations: Record<string, string> = yield select(
          state => state.cache.translations[language].translations,
        );
        yield put(
          cacheSlice.actions.saveTranslationsError('Save translations error '),
        );

        yield call(setLocalizationBundle, language, reduxTranslations);
      }
    }
  }
}
