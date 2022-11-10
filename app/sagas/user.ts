import _ from 'lodash';
import moment from 'moment';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  firebaseChangePassword,
  firebaseDeleteAccount,
  firebaseLoginUser,
  firebaseLogout,
  firebaseRegisterUser,
  FirestoreCollections,
  firestoreCreateChild,
  firestoreCreateChildProgress,
  firestoreGetChildProgress,
  firestoreGetParent,
  firestoreGetParentChildren,
  firestoreSaveDeviceToken,
  firestoreUpdateUser,
  IFirebaseAuthResponse,
  IFirestoreErrorResponse,
  IFirestoreParent,
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
  IEditUser,
  ISignUpData,
} from '../redux/types';
import { StaticNavigator } from '../services/navigator';
import { IParent } from '../models/IParent';
import { IChild } from '../models/IChild';
import { ONE_DAY_SECONDS } from '../constants/time';

function* watchLoginUser({
  payload: { email, password },
}: IAuthUserActionPayload) {
  const loginUserResponse: IFirebaseAuthResponse = yield call(
    firebaseLoginUser,
    email,
    password,
  );

  if (!loginUserResponse.error) {
    const parent: IFirestoreParent = yield call(firestoreGetParent);
    const children: IChild[] = yield call(firestoreGetParentChildren);

    yield put(
      userSlice.actions.loginUserSuccess({
        parent: parent._data,
        children: children,
      }),
    );

    // TODO: change to real stack
    yield call(StaticNavigator.navigateTo, 'SelectUser');
    yield call(firestoreSaveDeviceToken);
  } else {
    yield put(userSlice.actions.loginUserError(loginUserResponse.error));
  }
}

function* watchSetChild({ payload: child }: PayloadAction<IChild>) {
  const childProgress: IFirestoreUserProgress = yield call(
    firestoreGetChildProgress,
    child.uid,
  );
  if (childProgress._data) {
    yield put(userSlice.actions.setChildSuccess(child));
    yield put(plantSlice.actions.setPlantState(childProgress._data.plants));
    yield put(questSlice.actions.setQuestState(childProgress._data.quests));
    yield put(elixirSlice.actions.setElixirState(childProgress._data.elixir));

    const nowSeconds = +moment().format('X');
    if (
      nowSeconds - childProgress._data.quests.lastDayUpdate >=
        ONE_DAY_SECONDS &&
      !childProgress._data.quests.interruptedQuestLine &&
      !childProgress._data.quests.currentDayQuestsStack.length
    ) {
      yield put(questSlice.actions.setLastDayUpdate());
      yield put(
        questSlice.actions.updateCurrentDay(
          childProgress._data.quests.currentDay + 1,
        ),
      );
      yield put(questSlice.actions.setCurrentDayQuestsStack());
    }
  } else {
    yield put(userSlice.actions.setChildError('Set child error'));
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
      uid: registerUserResponse.user?.uid,
      email: parent.email,
      avatar: parent.avatar,
      nickname: parent.nickname,
      emailVerified: registerUserResponse.user?.emailVerified,
    } as IParent;

    yield put(userSlice.actions.registerParentSuccess(user));

    yield call(StaticNavigator.navigateTo, 'SignUpSuccess');
  } else {
    yield put(
      userSlice.actions.registerParentError(registerUserResponse.error),
    );
  }
}

function* watchEditParent({ payload: { nickname } }: PayloadAction<IEditUser>) {
  const parent: IParent = yield select(state => state.user.parent);
  const newParent: IParent = { ...parent, nickname };
  const EditParentResponse: IFirestoreErrorResponse = yield call(
    firestoreUpdateUser,
    FirestoreCollections.Parents,
    newParent,
  );

  if (!EditParentResponse.error) {
    yield put(userSlice.actions.editParentSuccess(newParent));
  } else {
    yield put(userSlice.actions.editParentError('Edit parent error'));
  }
}

function* watchEditChild({
  payload: { nickname, userId },
}: PayloadAction<IEditUser>) {
  const child: IChild = yield select(state => state.user.child);
  const children: IChild[] = yield select(state => state.user.children);

  let newChild = child;

  if (child.uid !== userId) {
    const editedChildIdx = _.findIndex(
      children,
      (item: IChild) => item.uid === userId,
    );
    if (editedChildIdx !== -1) {
      newChild = { ...children[editedChildIdx], nickname };
    }
  } else {
    newChild = { ...child, nickname };
  }

  const EditChildResponse: IFirestoreErrorResponse = yield call(
    firestoreUpdateUser,
    FirestoreCollections.Children,
    newChild,
  );

  if (!EditChildResponse.error) {
    yield put(userSlice.actions.editChildSuccess(newChild));
  } else {
    yield put(userSlice.actions.editChildError('Edit child error'));
  }
}

function* watchCreateChild({ payload: child }: PayloadAction<IChild>) {
  const CreateChildResponse: IFirestoreErrorResponse = yield call(
    firestoreCreateChild,
    child,
  );

  if (!CreateChildResponse.error) {
    yield call(StaticNavigator.navigateTo, 'SignUpSuccess', {
      isChild: true,
    });

    const FirestoreCreateChildProgressResponse: IFirestoreErrorResponse =
      yield call(firestoreCreateChildProgress, child.uid);
    if (!FirestoreCreateChildProgressResponse.error) {
      yield put(userSlice.actions.createChildSuccess(child));
      yield put(questSlice.actions.getInitialState());
      yield put(questSlice.actions.updateCurrentDay(1));
      yield put(questSlice.actions.setCurrentDayQuestsStack());
      yield put(questSlice.actions.setLastDayUpdate());
      yield put(elixirSlice.actions.getInitialState());
      yield put(plantSlice.actions.getInitialState());
    }
  } else {
    yield put(userSlice.actions.createChildError('Create child error'));
  }
}

function* watchChangePassword({
  payload: { newPassword, currentPassword },
}: IChangePasswordActionPayload) {
  const ChangePasswordResponse: IFirestoreErrorResponse = yield call(
    firebaseChangePassword,
    currentPassword,
    newPassword,
  );

  if (!ChangePasswordResponse.error) {
    yield call(StaticNavigator.navigateTo, 'ChangePasswordSuccess');
  } else {
    yield put(userSlice.actions.changePasswordError('Change password error'));
  }
}

function* watchDeleteAccount({ payload: password }: PayloadAction<string>) {
  const ChangePasswordResponse: IFirestoreErrorResponse = yield call(
    firebaseDeleteAccount,
    password,
  );
  if (!ChangePasswordResponse.error) {
    yield put(questSlice.actions.getInitialState());
    yield put(plantSlice.actions.getInitialState());
    yield put(elixirSlice.actions.getInitialState());
    yield call(StaticNavigator.navigateTo, 'DeleteAccountSuccess');
  } else {
    yield put(userSlice.actions.deleteAccountError('Delete account error'));
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
  yield takeLatest(userSlice.actions.setChild, watchSetChild);
  yield takeLatest(userSlice.actions.registerParent, watchRegisterParent);
  yield takeLatest(userSlice.actions.createChild, watchCreateChild);
  yield takeLatest(userSlice.actions.changePassword, watchChangePassword);
  yield takeLatest(userSlice.actions.editParent, watchEditParent);
  yield takeLatest(userSlice.actions.editChild, watchEditChild);
  yield takeLatest(userSlice.actions.deleteAccount, watchDeleteAccount);

  yield takeLatest(userSlice.actions.logout, watchLogout);
}
