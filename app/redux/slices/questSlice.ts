import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  currentQuestLine: Nullable<{ id: string; quests: IQuest[] }>;
  currentQuestIdx: number;
  dailyChecks: Nullable<Record<string, string>>;
}

const INITIAL_STATE: IQuestState = {
  allQuests: null,
  currentQuestIdx: 0,
  currentQuestLine: null,
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
    saveCurrentQuestIdx(state, { payload }: PayloadAction<number>) {
      state.currentQuestIdx = payload;
    },
    saveDailyCheck(state, { payload }: PayloadAction<IDailyCheck>) {
      state.dailyChecks = { ...state.dailyChecks, ...payload };
    },
  },
});
