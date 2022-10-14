import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';

import { IInterruptedQuestLine } from '../redux/types/questTypes';
import { firestoreUpdateUserProgress } from '../services/firebase';
import { questSlice } from '../redux/slices';
import { Nullable } from '../utils';
import { RootState } from '../redux';
import { IQuestProgress } from '../utils/types';

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
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
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

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
      ...currentQuestState,
      completedQuestsId: currentQuestState.completedQuestsId
        ? [...currentQuestState.completedQuestsId, payload]
        : [payload],
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

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
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

function* watchUpdateCurrentDayQuestsStack() {
  const currentQuestState: IQuestProgress = yield select(state =>
    questStateSelector(state),
  );
  const newcCurrentDayQuestsStack = [
    ...currentQuestState.currentDayQuestsStack,
  ];
  newcCurrentDayQuestsStack.pop();

  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
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
  // TODO: change to if
  try {
    yield call(firestoreUpdateUserProgress, 'quests', {
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
