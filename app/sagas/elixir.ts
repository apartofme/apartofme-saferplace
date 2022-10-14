import { call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { firestoreUpdateUserProgress } from '../services/firebase';
import { elixirSlice } from '../redux/slices';

function* watchUpdateFullnessElixir({ payload }: PayloadAction<number>) {
  try {
    yield call(firestoreUpdateUserProgress, 'elixir', {
      fullnessElixir: payload,
    });

    yield put(elixirSlice.actions.updateFullnessElixirSuccess(payload));
  } catch {
    yield put(
      elixirSlice.actions.updateFullnessElixirError('updateCurrentDayError'),
    );
  }
}

export function* elixirSaga() {
  yield takeLatest(
    elixirSlice.actions.updateFullnessElixir,
    watchUpdateFullnessElixir,
  );
}
