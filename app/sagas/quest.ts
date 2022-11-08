import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import _ from 'lodash';

import { IInterruptedQuestLine } from '../redux/types/questTypes';
import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';
import { IQuestProgress } from '../utils/types';
import { RootState } from '../redux';
import { firestoreUpdateChildProgress } from '../services/firebase';
import { IChild } from '../models/IChild';
import { ALL_QUESTS_STACK } from '../constants/quest';

const questStateSelector = (state: RootState) => {
  return {
    completedQuestsId: state.quest.completedQuestsId,
    currentDay: state.quest.currentDay,
    currentDayQuestsStack: state.quest.currentDayQuestsStack,
    lastDayUpdate: state.quest.lastDayUpdate,
    interruptedQuestLine: state.quest.interruptedQuestLine,
  };
};

function* watchUpdateCurrentDay({ payload }: PayloadAction<number>) {
  const currentQuestState: IQuestProgress = yield select(questStateSelector);
  const curentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      currentDay: payload,
    });

    yield put(questSlice.actions.updateCurrentDaySuccess(payload));
  } catch {
    yield put(
      questSlice.actions.updateCurrentDayError('updateCurrentDayError'),
    );
  }
}

function* watchSaveCompletedQuestsId({ payload }: PayloadAction<number>) {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const curentChild: IChild = yield select(state => state.user.child);
  const newCompletedQuestsId = [...currentQuestState.completedQuestsId];

  if (_.findIndex(currentQuestState.completedQuestsId, payload) === -1) {
    newCompletedQuestsId.push(payload);
  }

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      completedQuestsId: newCompletedQuestsId,
    });

    yield put(questSlice.actions.saveCompletedQuestsIdSuccess(payload));
  } catch {
    yield put(
      questSlice.actions.saveCompletedQuestsIdError(
        'saveCompletedQuestsIdError',
      ),
    );
  }
}

function* watchUpdateInterruptedQuestLine({
  payload,
}: PayloadAction<Nullable<IInterruptedQuestLine>>) {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const curentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      interruptedQuestLine: payload,
    });

    yield put(questSlice.actions.updateInterruptedQuestLineSuccess(payload));
  } catch {
    yield put(
      questSlice.actions.updateInterruptedQuestLineError(
        'updateInterruptedQuestLineError',
      ),
    );
  }
}

function* watchSetCurrentDayQuestsStack() {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const curentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      currentDayQuestsStack: ALL_QUESTS_STACK[currentQuestState.currentDay],
    });

    yield put(questSlice.actions.setCurrentDayQuestsStackSuccess());
  } catch {
    yield put(
      questSlice.actions.setCurrentDayQuestsStackError(
        'updateCurrentDayQuestsStackError',
      ),
    );
  }
}

function* watchUpdateCurrentDayQuestsStack() {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const newcCurrentDayQuestsStack = [
    ...currentQuestState.currentDayQuestsStack,
  ];
  newcCurrentDayQuestsStack.pop();
  const curentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      currentDayQuestsStack: newcCurrentDayQuestsStack,
    });

    yield put(questSlice.actions.updateCurrentDayQuestsStackSuccess());
  } catch {
    yield put(
      questSlice.actions.updateCurrentDayQuestsStackError(
        'updateCurrentDayQuestsStackError',
      ),
    );
  }
}

function* watchSetLastDayUpdate() {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );

  const nowSeconds = +moment().format('X');
  const curentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
      lastDayUpdate: nowSeconds,
    });

    yield put(questSlice.actions.setLastDayUpdateSuccess(nowSeconds));
  } catch {
    yield put(
      questSlice.actions.setLastDayUpdateError('setLastDayUpdateError'),
    );
  }
}

function* watchSaveProgress() {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const curentChild: IChild = yield select(state => state.user.child);

  try {
    yield call(firestoreUpdateChildProgress, curentChild.uid, 'quests', {
      ...currentQuestState,
    });

    yield put(questSlice.actions.updateCurrentDayQuestsStackSuccess());
  } catch {
    yield put(
      questSlice.actions.updateCurrentDayQuestsStackError(
        'updateCurrentDayQuestsStackError',
      ),
    );
  }
}

export function* questSaga() {
  yield takeLatest(questSlice.actions.updateCurrentDay, watchUpdateCurrentDay);
  yield takeLatest(
    questSlice.actions.saveCompletedQuestsId,
    watchSaveCompletedQuestsId,
  );
  yield takeLatest(
    questSlice.actions.updateInterruptedQuestLine,
    watchUpdateInterruptedQuestLine,
  );
  yield takeLatest(
    questSlice.actions.updateCurrentDayQuestsStack,
    watchUpdateCurrentDayQuestsStack,
  );
  yield takeLatest(
    questSlice.actions.setCurrentDayQuestsStack,
    watchSetCurrentDayQuestsStack,
  );
  yield takeLatest(questSlice.actions.saveProgress, watchSaveProgress);
  yield takeLatest(questSlice.actions.setLastDayUpdate, watchSetLastDayUpdate);
}
