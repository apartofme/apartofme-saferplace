import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPlant } from '../../models/IPlant';
import { PlantsType } from '../../utils/types';
import { IPlantArea, PLANTS_STACK } from '../types';

interface IPlantState {
  plantsStack: PlantsType[];
  plantArea: IPlantArea;
}

const INITIAL_STATE: IPlantState = {
  plantArea: {
    TopLeft: null,
    TopRight: null,
    Center: null,
    BottomLeft: null,
    BottomRight: null,
  },
  plantsStack: PLANTS_STACK,
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState: INITIAL_STATE,
  reducers: {
    updatePlantArea(state, { payload }: PayloadAction<IPlant>) {
      state.plantArea[payload.plantArea] = payload;
      state.plantsStack.pop();
    },
  },
});
