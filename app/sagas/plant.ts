import { call, put, select, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { plantSlice } from '../redux/slices';
import { IPlantArea } from '../redux/types';
import { IPlant } from '../models/IPlant';
import { PlantsType } from '../utils/types';
import { firestoreUpdateChildProgress } from '../services/firebase';
import { IChild } from '../models/IChild';

function* watchUpdatePlantArea({ payload }: PayloadAction<IPlant>) {
  const plantArea: IPlantArea = yield select(state => state.plant.plantArea);
  const plantsStack: PlantsType[] = yield select(
    state => state.plant.plantsStack,
  );
  const newPlantsStack: PlantsType[] = [...plantsStack];
  newPlantsStack.pop();

  const newPlantArea: IPlantArea = {
    ...plantArea,
    [payload.plantArea]: { ...payload },
  };

  const currentChild: IChild = yield select(state => state.user.child);

  // TODO: change to if
  try {
    yield call(firestoreUpdateChildProgress, currentChild.uid, 'plants', {
      plantArea: newPlantArea,
      plantsStack: newPlantsStack,
    });

    yield put(plantSlice.actions.updatePlantAreaSuccess(payload));
  } catch {
    yield put(
      plantSlice.actions.updatePlantAreaError('update plant area error'),
    );
  }
}

export function* plantSaga() {
  yield takeLatest(plantSlice.actions.updatePlantArea, watchUpdatePlantArea);
}
