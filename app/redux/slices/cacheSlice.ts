import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Nullable } from '../../utils';
import {
  IEmotionItem,
  IEmotionItemPayload,
  IEmotionPayload,
  IEmotions,
  IFavouriteCharmItem,
  IFavouriteCharmItemPayload,
  INicknames,
  INicknamesPayload,
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
  childTrySomethingItem: Nullable<ITrySomethingItem>;
  parentTrySomethingItem: Nullable<ITrySomethingItem>;
  nicknames: Nullable<INicknames>;
  emotions: IEmotions;
  currentQuestionIndex: number;
  emotionItem: Nullable<IEmotionItem>;
  favouriteCharmItem: Nullable<IFavouriteCharmItem>;
  troublesomeSpiritQuestionsItem: Nullable<string>;
  childKindnessItem: Nullable<string>;
  parentKindnessItem: Nullable<string>;
  selectedSong: Nullable<string>;
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
  translations: null,
  childTrySomethingItem: null,
  parentTrySomethingItem: null,
  nicknames: null,
  emotions: {
    selected: null,
    completed: [],
  },
  currentQuestionIndex: -1,
  emotionItem: null,
  favouriteCharmItem: null,
  troublesomeSpiritQuestionsItem: null,
  childKindnessItem: null,
  parentKindnessItem: null,
  selectedSong: null,
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
    saveChildTrySomethingItem(state, { payload }: ITrySomethingItemPayload) {
      state.childTrySomethingItem = payload;
    },
    saveParentTrySomethingItem(state, { payload }: ITrySomethingItemPayload) {
      state.parentTrySomethingItem = payload;
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

    saveTranslationsError(state, action: PayloadAction<string>) {},
    saveSelectedEmotion(state, { payload }: IEmotionPayload) {
      state.emotions.selected = payload;
    },
    completeSelectedEmotion({ emotions }) {
      if (emotions.selected) {
        emotions.completed = _.concat(emotions.completed, emotions.selected);
        emotions.selected = null;
      }
    },
    clearEmotions({ emotions }) {
      emotions.selected = null;
      emotions.completed = [];
    },
    saveEmotionItem(state, { payload }: IEmotionItemPayload) {
      state.emotionItem = payload;
    },
    saveFavouriteCharmItem(state, { payload }: IFavouriteCharmItemPayload) {
      state.favouriteCharmItem = _.merge(state.favouriteCharmItem, payload);
    },
    saveTroublesomeSpiritQuestionsItem(
      state,
      { payload }: PayloadAction<string>,
    ) {
      state.troublesomeSpiritQuestionsItem = payload;
    },
    incrementCurrentQuestionIndex(state) {
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
    },
    decrementCurrentQuestionIndex(state) {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex = state.currentQuestionIndex - 1;
      }
    },
    setDefaultCurrentQuestionIndex(state) {
      state.currentQuestionIndex = -1;
    },
    saveChildKindnessItem(state, { payload }: PayloadAction<string>) {
      state.childKindnessItem = payload;
    },
    saveParentKindnessItem(state, { payload }: PayloadAction<string>) {
      state.parentKindnessItem = payload;
    },

    setSelectedSong(state, { payload }: PayloadAction<string>) {
      state.selectedSong = payload;
    },
  },
});
