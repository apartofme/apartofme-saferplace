import { all } from 'redux-saga/effects';

import { initLocalizationSaga } from './localization';
import { initQuestSaga } from './initQuest';
import { userSaga } from './user';
import { plantSaga } from './plant';
import { questSaga } from './quest';

export default function* rootSaga() {
  yield all([
    userSaga(),
    initLocalizationSaga(),
    initQuestSaga(),
    plantSaga(),
    questSaga(),
  ]);
}
