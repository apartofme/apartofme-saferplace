import { createSlice } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';
import { ISignUpData, ISignUpDataPayload } from '../types';

interface ICacheState {
  auth: Nullable<ISignUpData>;
}

const INITIAL_STATE: ICacheState = {
  auth: null,
};

export const cacheSlice = createSlice({
  name: 'cache',
  initialState: INITIAL_STATE,
  reducers: {
    saveSignUpData(state, { payload }: ISignUpDataPayload) {
      state.auth = {
        ...state.auth,
        ...payload,
      };
    },
  },
});
