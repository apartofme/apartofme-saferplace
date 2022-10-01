import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

import { Nullable } from '../../utils';
import { IQuestLine } from '../../models/IQuestLine';
import {
  IDailyCheck,
  ISaveAllQuestsPayload,
  ISaveCurrentQuestLineQuests,
} from '../types/questTypes';
import { IQuest } from '../../models/IQuest';

interface IQuestState {
  allQuests: Nullable<Record<string, Record<string, IQuestLine>>>;
  currentQuestIdx: number;
  currentQuestLine: Nullable<{ id: string; quests: IQuest[] }>;
  currentQuestStack: number[];
  dailyChecks: Nullable<Record<string, string>>;
}

const INITIAL_STATE: IQuestState = {
  allQuests: null,
  currentQuestIdx: 0,
  currentQuestLine: null,
  currentQuestStack: [],
  dailyChecks: null,
};

/* eslint-disable @typescript-eslint/no-unused-vars */
export const questSlice = createSlice({
  name: 'quest',
  initialState: INITIAL_STATE,
  reducers: {
    saveAllQuests() {},
    saveAllQuestsSuccess(state, { payload }: ISaveAllQuestsPayload) {
      state.allQuests = { ...state.allQuests, ...payload };
    },
    saveAllQuestsError(state, action: PayloadAction<string>) {},

    saveCurrentQuestLine(
      state,
      { payload }: PayloadAction<ISaveCurrentQuestLineQuests>,
    ) {
      state.currentQuestLine = payload;
    },
    pushToCurrentQuestStack(state, { payload }: PayloadAction<number>) {
      state.currentQuestStack = _.concat(state.currentQuestStack, payload);
    },
    popFromCurrentQuestStack(state) {
      state.currentQuestStack = state.currentQuestStack.slice(0, -1);
    },
    clearQuestStack(state) {
      state.currentQuestStack = [];
    },
    saveCurrentQuestIdx(state, { payload }: PayloadAction<number>) {
      state.currentQuestIdx = payload;
    },
    saveDailyCheck(state, { payload }: PayloadAction<IDailyCheck>) {
      state.dailyChecks = { ...state.dailyChecks, ...payload };
    },
  },
});
