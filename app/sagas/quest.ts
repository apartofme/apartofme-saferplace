import { call, put } from 'redux-saga/effects';

import CONFIG from '../config/env';
import { IQuestDatoCms } from '../models/IQuest';
import { IQuestLineDatoCms } from '../models/IQuestLine';
import { questSlice } from '../redux/slices';
import { datocmsApiInstance } from '../services/datocms';
import { questsToDictionary } from '../utils';

export function* initQuestSaga() {
  const locales = CONFIG.LANGUAGES;

  for (const language of locales) {
    const quests: IQuestDatoCms[] = yield call(
      datocmsApiInstance.getAllQuests,
      language,
    );
    const questLines: IQuestLineDatoCms[] = yield call(
      datocmsApiInstance.getAllQuestLines,
      language,
    );
    const allCorrectQuests = questsToDictionary(language, questLines, quests);

    if (allCorrectQuests) {
      yield put(questSlice.actions.saveAllQuestsSuccess(allCorrectQuests));
    } else {
      yield put(questSlice.actions.saveAllQuestsError('get all quests error'));
    }
  }
}
