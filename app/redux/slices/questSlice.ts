import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import moment from 'moment';
import _ from 'lodash';

import { Nullable } from '../../utils';
import { IQuestLine } from '../../models/IQuestLine';
import {
  ALL_QUESTS_STACK,
  IDailyCheck,
  IInterruptedQuestLine,
  ISaveAllQuestsPayload,
  ISaveCurrentQuestLineQuests,
} from '../types/questTypes';
import { IQuest } from '../../models/IQuest';

interface IQuestState {
  currentDay: number;
  lastDayUpdate: number;
  currentDayQuestsStack: number[];
  allQuests: Nullable<Record<string, Record<string, IQuestLine>>>;
  allQuestsStack: number[][];
  interruptedQuestLine: Nullable<IInterruptedQuestLine>;
  currentQuestIdx: number;
  currentQuestLine: Nullable<{ id: string; quests: IQuest[] }>;
  currentQuestStack: number[];
  dailyChecks: Nullable<Record<string, string>>;
  completedQuestsId: Nullable<number[]>;
}

const INITIAL_STATE: IQuestState = {
  currentDay: 2,
  lastDayUpdate: 0,
  currentDayQuestsStack: [],
  allQuests: null,
  interruptedQuestLine: null,
  allQuestsStack: ALL_QUESTS_STACK,
  currentQuestIdx: 0,
  currentQuestLine: null,
  currentQuestStack: [],
  dailyChecks: null,
  completedQuestsId: null,
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
    updateCurrentDay(state, { payload }: PayloadAction<number>) {
      state.currentDay = payload;
    },
    saveCompletedQuestsId(state, { payload }: PayloadAction<number>) {
      if (state.completedQuestsId) {
        state.completedQuestsId?.push(payload);
        return;
      }
      state.completedQuestsId = [payload];
    },
    updateInterruptedQuestLine(
      state,
      { payload }: PayloadAction<IInterruptedQuestLine | null>,
    ) {
      state.interruptedQuestLine = payload;
    },
    setCurrentDayQuestsStack(state) {
      state.currentDayQuestsStack = state.allQuestsStack[state.currentDay];
    },
    updateCurrentDayQuestsStack(state) {
      state.currentDayQuestsStack.pop();
    },
    setLastDayUpdate(state) {
      state.lastDayUpdate = +moment().format('X');
    },
  },
});
