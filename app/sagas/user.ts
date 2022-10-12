import { call, put, select, takeLatest } from 'redux-saga/effects';

import {
  firebaseChangePassword,
  firebaseLoginUser,
  firebaseLogout,
  firebaseRegisterUser,
  firestoreGetUser,
  firestoreSaveDeviceToken,
  firestoreUpdateUser,
  IFirebaseAuthResponse,
  IFirebaseChangePasswordResponse,
  IFirestoreUser,
} from '../services/firebase';
import { questSlice, userSlice } from '../redux/slices';
import {
  IAuthUserActionPayload,
  IChangePasswordActionPayload,
  IShortSignUpData,
  ISignUpData,
} from '../redux/types';
import { StaticNavigator } from '../services/navigator';
import { IUser } from '../models/IUser';

function* watchLoginUser({
  payload: { email, password },
}: IAuthUserActionPayload) {
  const loginUserResponse: IFirebaseAuthResponse = yield call(
    firebaseLoginUser,
    email,
    password,
  );
  if (!loginUserResponse.error) {
    const user: IFirestoreUser = yield call(firestoreGetUser);
    yield put(userSlice.actions.loginUserSuccess(user._data));
    // TODO: change to real stack
    yield call(StaticNavigator.navigateTo, 'GardenStack', {
      screen: 'GardenTutorialDialog',
      params: { isStart: true },
    });
    yield call(firestoreSaveDeviceToken);
  } else {
    yield put(userSlice.actions.loginUserError(loginUserResponse.error));
  }
}

function* watchRegisterParent() {
  const parent: ISignUpData = yield select(state => state.cache.auth.parent);
  const registerUserResponse: IFirebaseAuthResponse = yield call(
    firebaseRegisterUser,
    parent.email as string,
    parent.password as string,
  );
  if (!registerUserResponse.error) {
    const user = {
      email: parent.email,
      avatar: parent.avatar,
      nickname: parent.nickname,
      emailVerified: registerUserResponse.user?.emailVerified,
      uid: registerUserResponse.user?.uid,
      createdAt: parent.createdAt,
    } as IUser;

    yield call(firestoreUpdateUser, { parent: user });
    yield put(userSlice.actions.registerParentSuccess(user));
    yield call(questSlice.actions.updateCurrentDay, 1);
    yield call(questSlice.actions.setLastDayUpdate);
  } else {
    yield put(
      userSlice.actions.registerParentError(registerUserResponse.error),
    );
  }
}

function* watchSaveChild() {
  const child: IShortSignUpData = yield select(state => state.cache.auth.child);
  try {
    firestoreUpdateUser({ child });
    yield put(userSlice.actions.saveChildSuccess(child));
  } catch {
    yield put(userSlice.actions.saveChildError('save child error'));
  }
}

function* watchChangePassword({
  payload: { newPassword, currentPassword },
}: IChangePasswordActionPayload) {
  const changePasswordresponse: IFirebaseChangePasswordResponse = yield call(
    firebaseChangePassword,
    currentPassword,
    newPassword,
  );

  if (changePasswordresponse.error) {
    yield call(StaticNavigator.navigateTo, 'ChangePasswordSuccess');
  } else {
    yield put(userSlice.actions.changePasswordError('change password error'));
  }
}

function* watchLogout() {
  yield call(firebaseLogout);
  yield call(StaticNavigator.reset, 'ParentsOnboardingStack');
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, watchLoginUser);
  yield takeLatest(userSlice.actions.registerParent, watchRegisterParent);
  yield takeLatest(userSlice.actions.saveChild, watchSaveChild);
  yield takeLatest(userSlice.actions.changePassword, watchChangePassword);

  yield takeLatest(userSlice.actions.logout, watchLogout);
}
