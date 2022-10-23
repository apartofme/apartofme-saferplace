import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  firebaseChangePassword,
  firebaseDeleteAccount,
  firebaseLoginUser,
  firebaseLogout,
  firebaseRegisterUser,
  firestoreCreateUserProgress,
  firestoreGetUser,
  firestoreGetUserProgress,
  firestoreSaveDeviceToken,
  firestoreUpdateUser,
  IFirebaseAuthResponse,
  IFirebaseChangePasswordResponse,
  IFirebaseSaveChildResponse,
  IFirebaseUpdateUserResponse,
  IFirestoreErrorResponse,
  IFirestoreUser,
  IFirestoreUserProgress,
} from '../services/firebase';
import {
  elixirSlice,
  plantSlice,
  questSlice,
  userSlice,
} from '../redux/slices';
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
    const userProgress: IFirestoreUserProgress = yield call(
      firestoreGetUserProgress,
    );
    yield put(userSlice.actions.loginUserSuccess(user._data));
    yield put(plantSlice.actions.setPlantState(userProgress._data.plants));
    yield put(questSlice.actions.setQuestState(userProgress._data.quests));
    yield put(elixirSlice.actions.setElixirState(userProgress._data.elixir));

    // TODO: change to real stack
    yield call(StaticNavigator.navigateTo, 'GardenStack');
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

    yield call(firestoreUpdateUser, {
      parent: user,
    });
    const firestoreCreateUserProgressResponse: IFirestoreErrorResponse =
      yield call(firestoreCreateUserProgress);
    if (!firestoreCreateUserProgressResponse.error) {
      yield put(questSlice.actions.updateCurrentDay(1));
      yield put(questSlice.actions.setCurrentDayQuestsStack());
      yield put(questSlice.actions.setLastDayUpdate());
      yield put(userSlice.actions.registerParentSuccess(user));
    }
  } else {
    yield put(
      userSlice.actions.registerParentError(registerUserResponse.error),
    );
  }
}

function* watchUpdateParentData() {
  const parent: ISignUpData = yield select(state => state.cache.auth.parent);
  const updateParentResponse: IFirebaseUpdateUserResponse = yield call(
    firestoreUpdateUser,
    { parent },
  );

  if (!updateParentResponse.error) {
    yield put(userSlice.actions.updateParentSuccess(parent as IUser));
  } else {
    yield put(userSlice.actions.updateParentError('update parent error'));
  }
}

function* watchUpdateChildData() {
  const child: IShortSignUpData = yield select(state => state.cache.auth.child);
  const updateChildResponse: IFirebaseUpdateUserResponse = yield call(
    firestoreUpdateUser,
    { child },
  );

  if (!updateChildResponse.error) {
    yield put(userSlice.actions.updateChildSuccess(child as IUser));
  } else {
    yield put(userSlice.actions.updateChildError('update child error'));
  }
}

function* watchSaveChild() {
  const child: IShortSignUpData = yield select(state => state.cache.auth.child);
  const saveChildResponse: IFirebaseSaveChildResponse = yield call(
    firestoreUpdateUser,
    { child },
  );

  if (!saveChildResponse.error) {
    yield put(userSlice.actions.saveChildSuccess(child));
  } else {
    yield put(userSlice.actions.saveChildError('save child error'));
  }
}

function* watchChangePassword({
  payload: { newPassword, currentPassword },
}: IChangePasswordActionPayload) {
  const changePasswordResponse: IFirebaseChangePasswordResponse = yield call(
    firebaseChangePassword,
    currentPassword,
    newPassword,
  );

  if (!changePasswordResponse.error) {
    yield call(StaticNavigator.navigateTo, 'ChangePasswordSuccess');
  } else {
    yield put(userSlice.actions.changePasswordError('change password error'));
  }
}

function* watchDeleteAccount({ payload: password }: PayloadAction<string>) {
  const changePasswordResponse: IFirebaseChangePasswordResponse = yield call(
    firebaseDeleteAccount,
    password,
  );
  if (!changePasswordResponse.error) {
    yield put(questSlice.actions.getInitialState());
    yield put(plantSlice.actions.getInitialState());
    yield put(elixirSlice.actions.getInitialState());
    yield call(StaticNavigator.navigateTo, 'DeleteAccountSuccess');
  } else {
    yield put(userSlice.actions.deleteAccountError('delete account error'));
  }
}

function* watchLogout() {
  yield call(firebaseLogout);
  yield put(questSlice.actions.getInitialState());
  yield put(plantSlice.actions.getInitialState());
  yield put(elixirSlice.actions.getInitialState());

  yield call(StaticNavigator.reset, 'ParentsOnboardingStack');
}

export function* userSaga() {
  yield takeLatest(userSlice.actions.loginUser, watchLoginUser);
  yield takeLatest(userSlice.actions.registerParent, watchRegisterParent);
  yield takeLatest(userSlice.actions.saveChild, watchSaveChild);
  yield takeLatest(userSlice.actions.changePassword, watchChangePassword);
  yield takeLatest(userSlice.actions.updateParent, watchUpdateParentData);
  yield takeLatest(userSlice.actions.updateChild, watchUpdateChildData);
  yield takeLatest(userSlice.actions.deleteAccount, watchDeleteAccount);

  yield takeLatest(userSlice.actions.logout, watchLogout);
}
