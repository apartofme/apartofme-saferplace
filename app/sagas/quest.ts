import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { IInterruptedQuestLine } from '../redux/types/questTypes';
import { firestoreUpdateUserProgress } from '../services/firebase';
import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';

function* watchUpdateCurrentDay({ payload }: PayloadAction<number>) {
  const completedQuestsId: number[] = yield select(
    state => state.quest.completedQuestsId,
  );
  const currentDayQuestsStack: number[] = yield select(
    state => state.quest.currentDayQuestsStack,
  );
  const lastDayUpdate: number = yield select(
    state => state.quest.lastDayUpdate,
  );
  const interruptedQuestLine: Nullable<IInterruptedQuestLine> = yield select(
    state => state.quest.interruptedQuestLine,
  );
  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      completedQuestsId,
      currentDayQuestsStack,
      lastDayUpdate,
      interruptedQuestLine,
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
  const currentDay: number = yield select(state => state.quest.currentDay);
  const currentDayQuestsStack: number[] = yield select(
    state => state.quest.currentDayQuestsStack,
  );
  const lastDayUpdate: number = yield select(
    state => state.quest.lastDayUpdate,
  );
  const interruptedQuestLine: Nullable<IInterruptedQuestLine> = yield select(
    state => state.quest.interruptedQuestLine,
  );
  const completedQuestsId: number[] = yield select(
    state => state.quest.completedQuestsId,
  );
  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      currentDay,
      currentDayQuestsStack,
      lastDayUpdate,
      interruptedQuestLine,
      completedQuestsId: [...completedQuestsId, payload],
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
  const completedQuestsId: number[] = yield select(
    state => state.quest.completedQuestsId,
  );
  const currentDay: number = yield select(state => state.quest.currentDay);
  const currentDayQuestsStack: number[] = yield select(
    state => state.quest.currentDayQuestsStack,
  );
  const lastDayUpdate: number = yield select(
    state => state.quest.lastDayUpdate,
  );

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      completedQuestsId,
      currentDay,
      currentDayQuestsStack,
      lastDayUpdate,
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

function* watchUpdateCurrentDayQuestsStack() {
  const completedQuestsId: number[] = yield select(
    state => state.quest.completedQuestsId,
  );
  const currentDay: number = yield select(state => state.quest.currentDay);
  const currentDayQuestsStack: number[] = yield select(
    state => state.quest.currentDayQuestsStack,
  );
  const lastDayUpdate: number = yield select(
    state => state.quest.lastDayUpdate,
  );
  const interruptedQuestLine: Nullable<IInterruptedQuestLine> = yield select(
    state => state.quest.interruptedQuestLine,
  );

  const newcCurrentDayQuestsStack = [...currentDayQuestsStack];
  newcCurrentDayQuestsStack.pop();

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      completedQuestsId,
      currentDay,
      lastDayUpdate,
      interruptedQuestLine,
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
  const completedQuestsId: number[] = yield select(
    state => state.quest.completedQuestsId,
  );
  const currentDay: number = yield select(state => state.quest.currentDay);
  const currentDayQuestsStack: number[] = yield select(
    state => state.quest.currentDayQuestsStack,
  );
  const interruptedQuestLine: Nullable<IInterruptedQuestLine> = yield select(
    state => state.quest.interruptedQuestLine,
  );

  const nowSeconds = +moment().format('X');
  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      completedQuestsId,
      currentDay,
      currentDayQuestsStack,
      interruptedQuestLine,
      lastDayUpdate: nowSeconds,
    });

    yield put(questSlice.actions.setLastDayUpdateSuccess(nowSeconds));
  } catch {
    yield put(
      questSlice.actions.setLastDayUpdateError('setLastDayUpdateError'),
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
  yield takeLatest(questSlice.actions.setLastDayUpdate, watchSetLastDayUpdate);
}
