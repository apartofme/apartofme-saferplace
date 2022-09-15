import { call, put } from 'redux-saga/effects';

import CONFIG from '../config/env';
import { IQuestDatoCms } from '../models/IQuest';
import { IQuestLineDatoCms } from '../models/IQuestLine';
import { questSlice } from '../redux/slices';
import { apiInstance } from '../services/datocms';
import { questsToDictionary } from '../utils';

export function* initQuestSaga() {
  const locales = CONFIG.LANGUAGES;

  for (const language of locales) {
    const quests: IQuestDatoCms[] = yield call(
      apiInstance.getAllQuests,
      language,
    );
    const questLines: IQuestLineDatoCms[] = yield call(
      apiInstance.getAllQuestLines,
      language,
    );
    const allCorrectQuests = questsToDictionary(language, questLines, quests);
    if (allCorrectQuests) {
      yield put(questSlice.actions.saveAllQuests(allCorrectQuests));
    }
  }
}
