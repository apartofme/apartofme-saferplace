import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';
import { IQuestLine } from '../../models/IQuestLine';
import {
  ISaveAllQuestsPayload,
  ISaveCurrentQuestLineQuests,
} from '../types/questTypes';
import { IQuest } from '../../models/IQuest';

interface IQuestState {
  allQuests: Nullable<Record<string, Record<string, IQuestLine>>>;
  currentQuestLine: Nullable<{ id: string; quests: IQuest[] }>;
  currentQuestIdx: number;
}

const INITIAL_STATE: IQuestState = {
  allQuests: null,
  currentQuestIdx: 0,
  currentQuestLine: null,
};

export const questSlice = createSlice({
  name: 'quest',
  initialState: INITIAL_STATE,
  reducers: {
    saveAllQuests(state, { payload }: ISaveAllQuestsPayload) {
      state.allQuests = { ...state.allQuests, ...payload };
    },
    saveCurrentQuestLine(
      state,
      { payload }: PayloadAction<ISaveCurrentQuestLineQuests>,
    ) {
      state.currentQuestLine = payload;
    },
    saveCurrentQuestIdx(state, { payload }: PayloadAction<number>) {
      state.currentQuestIdx = payload;
    },
  },
});
