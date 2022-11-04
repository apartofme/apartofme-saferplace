import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { elixirSlice } from '../redux/slices';
import { IChild } from '../models/IChild';
import { firestoreUpdateChildProgress } from '../services/firebase';

function* watchUpdateFullnessElixir({ payload }: PayloadAction<number>) {
  const currentChild: IChild = yield select(state => state.user.child);
  try {
    yield call(firestoreUpdateChildProgress, currentChild.uid, 'elixir', {
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
