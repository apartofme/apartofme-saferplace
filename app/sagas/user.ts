import { call, put, takeLatest } from 'redux-saga/effects';

import { userSlice } from '../redux/slices';
import { IAuthUserActionPayload } from '../redux/types';
import { loginUser, logout, registerUser } from '../services/firebase';
import { IFirebaseAuthResponse } from '../services/firebase/types';

function* watchLoginUser({
  payload: { email, password },
}: IAuthUserActionPayload) {
  const loginUserResponse: IFirebaseAuthResponse = yield call(
    loginUser,
    email,
    password,
  );
  if (!loginUserResponse.error) {
    yield put(userSlice.actions.loginUserSuccess(loginUserResponse.user));
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
    registerUser,
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
  logout();
  // TODO: uncomment when AuthStack will be done
  // yield call(StaticNavigator.reset, 'AuthStack');
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, watchLoginUser);
  yield takeLatest(userSlice.actions.registerUser, watchRegisterUser);
  yield takeLatest(userSlice.actions.logout, watchLogout);
}
