/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  INITIAL_PLANTS_STACK,
  INITIAL_PLANT_AREA,
} from '../../constants/progress';

import { IPlant } from '../../models/IPlant';
import { Nullable } from '../../utils';
import { PlantsType } from '../../utils/types';
import { IPlantArea } from '../types';

interface IPlantState {
  plantsStack: Nullable<PlantsType[]>;
  plantArea: IPlantArea;
}

const INITIAL_STATE: IPlantState = {
  plantArea: INITIAL_PLANT_AREA,
  plantsStack: INITIAL_PLANTS_STACK,
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState: INITIAL_STATE,
  reducers: {
    setPlantState(
      state,
      { payload: { plantArea, plantsStack } }: PayloadAction<IPlantState>,
    ) {
      state.plantArea = plantArea;
      state.plantsStack = plantsStack;
    },

    updatePlantArea(state, action: PayloadAction<IPlant>) {},
    updatePlantAreaSuccess(state, { payload }: PayloadAction<IPlant>) {
      if (state.plantsStack?.length) {
        state.plantArea[payload.plantArea] = { ...payload };
        state.plantsStack.pop();
      }
    },
    updatePlantAreaError(state, action: PayloadAction<string>) {},

    getInitialState() {
      return INITIAL_STATE;
    },
  },
});
