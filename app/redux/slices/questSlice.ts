import { createSlice } from '@reduxjs/toolkit';

import { Nullable } from '../../utils';
import { IQuestLine } from '../../models/IQuestLine';
import { ISaveAllQuestsPayload } from '../types/questTypes';

interface IQuestState {
  allQuests: Nullable<Record<string, Record<string, IQuestLine>>>;
}

const INITIAL_STATE: IQuestState = {
  allQuests: null,
};

export const questSlice = createSlice({
  name: 'quest',
  initialState: INITIAL_STATE,
  reducers: {
    saveAllQuests(state, { payload }: ISaveAllQuestsPayload) {
      state.allQuests = { ...state.allQuests, ...payload };
    },
  },
});
