import { call, put, takeLatest } from 'redux-saga/effects';

import { userSlice } from '../redux/slices';
import { IAuthUserActionPayload } from '../redux/types';
import {
  firebaseLoginUser,
  firebaseLogout,
  firebaseRegisterUser,
  firestoreSaveDeviceToken,
  IFirebaseAuthResponse,
} from '../services/firebase';

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
    yield call(firestoreSaveDeviceToken);
    // TODO: uncomment when MainStack will be done
    // StaticNavigator.navigateTo('MainStack');
  } else {
    yield put(userSlice.actions.loginUserError(loginUserResponse.error));
  }
}

function* watchRegisterUser({
  payload: { email, password },
}: IAuthUserActionPayload) {
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
