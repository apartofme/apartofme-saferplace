import { call, put, takeLatest } from 'redux-saga/effects';

import { userSlice } from '../redux/slices';
import {
  ILoginUserActionPayload,
  IRegisterUserActionPayload,
} from '../redux/types';
import { apiInstance } from '../services/api';
import {
  IApiLoginUserPayload,
  IApiRegisterUserPayload,
} from '../services/api/apiPayload.types';
import {
  LoginUserResponse,
  RegisterUserResponse,
} from '../services/api/apiResponse.types';
import { StaticNavigator } from '../services/navigator';

function* watchLoginUser({
  payload: { email, password },
}: ILoginUserActionPayload) {
  const params: IApiLoginUserPayload = {
    email,
    password,
  };
  const response: LoginUserResponse = yield call(apiInstance.loginUser, params);

  if (response.ok && response.data) {
    yield put(userSlice.actions.loginUserSuccess(response.data));

    StaticNavigator.navigateTo('MainTabs');
  } else {
    // TODO: error from backend side
    yield put(userSlice.actions.loginUserError('Login error'));
  }
}

function* watchRegisterUser({
  payload: { name, email, phone, password, confirmPassword },
}: IRegisterUserActionPayload) {
  const params: IApiRegisterUserPayload = {
    name,
    email,
    phone,
    password,
    password_confirmation: confirmPassword,
  };

  const response: RegisterUserResponse = yield call(
    apiInstance.registerUser,
    params,
  );
  if (response.ok && response.data) {
    yield put(userSlice.actions.registerUserSuccess(response.data));
    StaticNavigator.navigateTo('Login');
  } else {
    // TODO: error from backend side
    yield put(userSlice.actions.registerUserError('Register error'));
  }
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, watchLoginUser);
  yield takeLatest(userSlice.actions.registerUser, watchRegisterUser);
}
