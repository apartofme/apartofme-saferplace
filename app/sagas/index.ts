import { all } from 'redux-saga/effects';

import { initLocalizationSaga } from './localization';
import { userSaga } from './user';

export default function* rootSaga() {
  yield all([userSaga(), initLocalizationSaga()]);
}
