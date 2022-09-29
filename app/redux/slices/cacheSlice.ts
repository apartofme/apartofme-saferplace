import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Nullable } from '../../utils';
import {
  ISaveTranslationsPayload,
  IShortSignUpData,
  IShortSignUpDataPayload,
  ISignUpData,
  ISignUpDataPayload,
  ITranslations,
  ITrySomethingItem,
  ITrySomethingItemPayload,
} from '../types';

interface ICacheState {
  auth: {
    parent: Nullable<ISignUpData>;
    child: Nullable<IShortSignUpData>;
  };
  translations: Nullable<ITranslations>;
  trySomethingItem: Nullable<ITrySomethingItem>;
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
  translations: null,
  trySomethingItem: null,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const cacheSlice = createSlice({
  name: 'cache',
  initialState: INITIAL_STATE,
  reducers: {
    saveSignUpDataParent(state, { payload }: ISignUpDataPayload) {
      state.auth.parent = _.merge(state.auth.parent, payload);
    },
    saveSignUpDataChild(state, { payload }: IShortSignUpDataPayload) {
      state.auth.child = _.merge(state.auth.child, payload);
    },
    saveTranslations() {},
    saveTranslationsSuccess(state, { payload }: ISaveTranslationsPayload) {
      state.translations = _.merge(state.translations, payload);
    },
    saveTrySomethingItem(state, { payload }: ITrySomethingItemPayload) {
      state.trySomethingItem = _.merge(state.trySomethingItem, payload);
    },
    saveTranslationsError(state, action: PayloadAction<string>) {},
  },
});
