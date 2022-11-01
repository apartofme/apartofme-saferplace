import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { EmotionButtonType } from '../../components';
import { Nullable } from '../../utils';
import {
  IEmotionItem,
  IEmotions,
  IFavouriteCharmItem,
  INicknames,
  IShortSignUpData,
  ISignUpData,
  ITranslations,
  ITroublesomeSpiritQuestionsItem,
  ITrySomethingItem,
} from '../types';

interface ICacheState {
  auth: {
    parent: Nullable<ISignUpData>;
    child: Nullable<IShortSignUpData>;
  };
  translations: Nullable<ITranslations>;
  childTrySomethingFirstItem: Nullable<ITrySomethingItem>;
  parentTrySomethingFirstItem: Nullable<ITrySomethingItem>;
  childTrySomethingSecondItem: Nullable<ITrySomethingItem>;
  parentTrySomethingSecondItem: Nullable<ITrySomethingItem>;
  nicknames: Nullable<INicknames>;
  emotions: IEmotions;
  currentQuestionIndex: number;
  emotionItem: Nullable<IEmotionItem>;
  favouriteCharmItem: Nullable<IFavouriteCharmItem>;
  troublesomeSpiritQuestionsItem: Nullable<ITroublesomeSpiritQuestionsItem>;
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
  childTrySomethingFirstItem: null,
  parentTrySomethingFirstItem: null,
  childTrySomethingSecondItem: null,
  parentTrySomethingSecondItem: null,
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
    saveChildTrySomethingFirstItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.childTrySomethingFirstItem = payload;
    },
    saveParentTrySomethingFirstItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.parentTrySomethingFirstItem = payload;
    },
    saveChildTrySomethingSecondItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.childTrySomethingSecondItem = payload;
    },
    saveParentTrySomethingSecondItem(
      state,
      { payload }: PayloadAction<ITrySomethingItem>,
    ) {
      state.parentTrySomethingSecondItem = payload;
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

    saveTranslationsError(state, action: PayloadAction<string>) {},
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
    saveFavouriteCharmItem(
      state,
      { payload }: PayloadAction<IFavouriteCharmItem>,
    ) {
      state.favouriteCharmItem = _.merge(state.favouriteCharmItem, payload);
    },
    saveTroublesomeSpiritQuestionsItem(
      state,
      { payload }: PayloadAction<Nullable<ITroublesomeSpiritQuestionsItem>>,
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
