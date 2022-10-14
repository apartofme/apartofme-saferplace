/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IElixirState {
  fullnessElixir: number;
}

const INITIAL_STATE: IElixirState = {
  fullnessElixir: 0,
};

export const elixirSlice = createSlice({
  name: 'elixir',
  initialState: INITIAL_STATE,
  reducers: {
    setElixirState(
      state,
      { payload: { fullnessElixir } }: PayloadAction<IElixirState>,
    ) {
      state.fullnessElixir = fullnessElixir;
    },

    updateFullnessElixir(state, action: PayloadAction<number>) {},
    updateFullnessElixirSuccess(state, { payload }: PayloadAction<number>) {
      state.fullnessElixir = state.fullnessElixir + payload;
    },
    updateFullnessElixirError(state, action: PayloadAction<string>) {},

    getInitialState() {
      return INITIAL_STATE;
    },
  },
});
