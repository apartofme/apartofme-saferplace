import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { IPlant } from '../../models/IPlant';
import { Nullable } from '../../utils';
import {
  INicknames,
  INicknamesPayload,
  IPlantArea,
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
  nicknames: Nullable<INicknames>;
  // TODO: make it as separate slice
  plantArea: IPlantArea;
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
  translations: null,
  trySomethingItem: null,
  nicknames: null,
  plantArea: {
    TopLeft: null,
    TopRight: null,
    Center: null,
    BottomLeft: null,
    BottomRight: null,
  },
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
    saveNicknames(state, { payload }: INicknamesPayload) {
      state.nicknames = _.merge(state.nicknames, payload);
    },
    saveChosenNickname(state, { payload }: PayloadAction<string>) {
      if (state.nicknames && payload !== state.nicknames.firstPlayer) {
        state.nicknames.secondPlayer = state.nicknames.firstPlayer;
        state.nicknames.firstPlayer = payload;
      }
    },
    // TODO: move to separate slice
    updatePlantArea(state, { payload }: PayloadAction<IPlant>) {
      state.plantArea[payload.plantArea] = payload;
    },

    saveTranslationsError(state, action: PayloadAction<string>) {},
  },
});
