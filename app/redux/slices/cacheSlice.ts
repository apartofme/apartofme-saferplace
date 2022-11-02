import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import {
  EmotionButtonType,
  IEmotionItem,
  ITroublesomeItem,
  ITrySomethingItem,
} from '../../components';
import { Nullable } from '../../utils';
import {
  IEmotions,
  INicknames,
  IPlayer,
  IShortSignUpData,
  ISignUpData,
  ITranslations,
} from '../types';

interface ICacheState {
  auth: {
    parent: Nullable<ISignUpData>;
    child: Nullable<IShortSignUpData>;
  };
  translations: Nullable<ITranslations>;
  nicknames: Nullable<INicknames>;
  child: IPlayer;
  parent: IPlayer;
  emotions: IEmotions;
  currentQuestionIndex: number;
  emotionItem: Nullable<IEmotionItem>;
  troublesomeItem: Nullable<ITroublesomeItem>;
  selectedSong: Nullable<string>;
}

const INITIAL_STATE: ICacheState = {
  auth: {
    parent: null,
    child: null,
  },
  translations: null,
  nicknames: null,
  child: {
    kindnessItem: null,
    trySomethingFirstItem: null,
    trySomethingSecondItem: null,
  },
  parent: {
    kindnessItem: null,
    trySomethingFirstItem: null,
    trySomethingSecondItem: null,
  },
  emotions: {
    selected: null,
    completed: [],
  },
  currentQuestionIndex: -1,
  emotionItem: null,
  troublesomeItem: null,
  selectedSong: null,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const cacheSlice = createSlice({
  name: 'cache',
  initialState: INITIAL_STATE,
  reducers: {
    saveSignUpDataParent(
      state,
      { payload }: PayloadAction<Partial<ISignUpData>>,
    ) {
      state.auth.parent = _.merge(state.auth.parent, payload);
    },
    saveSignUpDataChild(
      state,
      { payload }: PayloadAction<Partial<IShortSignUpData>>,
    ) {
      state.auth.child = _.merge(state.auth.child, payload);
    },
    saveTranslations() {},
    saveTranslationsSuccess(state, { payload }: PayloadAction<ITranslations>) {
      state.translations = _.merge(state.translations, payload);
    },
    saveTranslationsError(state, action: PayloadAction<string>) {},

    saveChildTrySomethingFirstItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.child.trySomethingFirstItem = payload;
    },
    saveParentTrySomethingFirstItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.parent.trySomethingFirstItem = payload;
    },
    saveChildTrySomethingSecondItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.child.trySomethingSecondItem = payload;
    },
    saveParentTrySomethingSecondItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.parent.trySomethingSecondItem = payload;
    },
    saveSelectedEmotion(
      state,
      { payload }: PayloadAction<Nullable<EmotionButtonType>>,
    ) {
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
    saveEmotionItem(state, { payload }: PayloadAction<IEmotionItem>) {
      state.emotionItem = payload;
    },
    saveTroublesomeItem(state, { payload }: PayloadAction<ITroublesomeItem>) {
      state.troublesomeItem = payload;
    },
    saveChildKindnessItem(state, { payload }: PayloadAction<string>) {
      state.child.kindnessItem = payload;
    },
    saveParentKindnessItem(state, { payload }: PayloadAction<string>) {
      state.parent.kindnessItem = payload;
    },

    saveNicknames(state, { payload }: PayloadAction<INicknames>) {
      state.nicknames = _.merge(state.nicknames, payload);
    },
    saveChosenNickname(state, { payload }: PayloadAction<string>) {
      if (state.nicknames && payload !== state.nicknames.firstPlayer) {
        state.nicknames.secondPlayer = state.nicknames.firstPlayer;
        state.nicknames.firstPlayer = payload;
      }
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
    setSelectedSong(state, { payload }: PayloadAction<string>) {
      state.selectedSong = payload;
    },
  },
});
