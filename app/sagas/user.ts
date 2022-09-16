import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  firebaseLoginUser,
  firebaseLogout,
  firebaseRegisterUser,
  firestoreSaveDeviceToken,
  IFirebaseAuthResponse,
} from '../services/firebase';
import { userSlice } from '../redux/slices';
import { IAuthUserActionPayload } from '../redux/types';
import { StaticNavigator } from '../services/navigator';

function* watchLoginUser({
  payload: { email, password },
}: IAuthUserActionPayload) {
  const loginUserResponse: IFirebaseAuthResponse = yield call(
    firebaseLoginUser,
    email,
    password,
  );
  if (!loginUserResponse.error) {
    yield put(userSlice.actions.loginUserSuccess(loginUserResponse.user));
    yield call(StaticNavigator.navigateTo, 'SelectUser');
    yield call(firestoreSaveDeviceToken);
  } else {
    yield put(userSlice.actions.loginUserError(loginUserResponse.error));
  }
}

function* watchRegisterUser() {
  const { email, password } = yield select(state => state.cache.auth.parent);
  const registerUserResponse: IFirebaseAuthResponse = yield call(
    firebaseRegisterUser,
    email,
    password,
  );
  if (!registerUserResponse.error) {
    yield put(userSlice.actions.registerUserSuccess(registerUserResponse.user));
  } else {
    yield put(userSlice.actions.registerUserError(registerUserResponse.error));
  }
}

function* watchLogout() {
  yield call(firebaseLogout);
  // TODO: uncomment when AuthStack will be done
  // yield call(StaticNavigator.reset, 'AuthStack');
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, watchLoginUser);
  yield takeLatest(userSlice.actions.registerUser, watchRegisterUser);
  yield takeLatest(userSlice.actions.logout, watchLogout);
}
