import { createSlice } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';
import {
  IShortSignUpData,
  IShortSignUpDataPayload,
  ISignUpData,
  ISignUpDataPayload,
} from '../types';

interface ICacheState {
  auth: {
    parent: Nullable<ISignUpData>;
    child: Nullable<IShortSignUpData>;
  };
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
};

export const cacheSlice = createSlice({
  name: 'cache',
  initialState: INITIAL_STATE,
  reducers: {
    saveSignUpDataParent(state, { payload }: ISignUpDataPayload) {
      state.auth.parent = {
        ...state.auth.parent,
        ...payload,
      };
    },
    saveSignUpDataChild(state, { payload }: IShortSignUpDataPayload) {
      state.auth.child = {
        ...state.auth.child,
        ...payload,
      };
    },
  },
});
