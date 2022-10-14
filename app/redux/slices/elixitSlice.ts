import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';

interface IElixirState {
  fullnessElixir: Nullable<number>;
}

const INITIAL_STATE: IElixirState = {
  fullnessElixir: null,
};

export const elixirSlice = createSlice({
  name: 'elixir',
  initialState: INITIAL_STATE,
  reducers: {
    updateFullnessElixir(state, { payload }: PayloadAction<number>) {
      state.fullnessElixir = state.fullnessElixir ?? 0 + payload;
    },
  },
});
