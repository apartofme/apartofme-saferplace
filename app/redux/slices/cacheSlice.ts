import { createSlice } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';
import {
  ISaveTranslationsPayload,
  IShortSignUpData,
  IShortSignUpDataPayload,
  ISignUpData,
  ISignUpDataPayload,
  ITranslations,
} from '../types';

interface ICacheState {
  auth: {
    parent: Nullable<ISignUpData>;
    child: Nullable<IShortSignUpData>;
  };
  translations: Nullable<ITranslations>;
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
  translations: null,
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
    saveTranslations(state, { payload }: ISaveTranslationsPayload) {
      state.translations = { ...state.translations, ...payload };
    },
  },
});
