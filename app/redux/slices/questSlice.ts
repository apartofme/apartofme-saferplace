import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
import { IQuestProgress } from '../../utils/types';

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
  completedQuestsId: number[];
  isCurrentQuestCompleted: boolean;
}

const INITIAL_STATE: IQuestState = {
  currentDay: 1,
  lastDayUpdate: 0,
  currentDayQuestsStack: [],
  allQuests: null,
  interruptedQuestLine: null,
  allQuestsStack: ALL_QUESTS_STACK,
  currentQuestIdx: 0,
  currentQuestLine: null,
  currentQuestStack: [],
  dailyChecks: null,
  completedQuestsId: [],
  isCurrentQuestCompleted: false,
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

    setQuestState(state, { payload }: PayloadAction<IQuestProgress>) {
      _.merge(state, payload);
    },

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

    saveProgress() {},
    saveProgressSuccess() {},
    saveProgressError(state, action: PayloadAction<string>) {},

    setCurrentDayQuestsStack() {},
    setCurrentDayQuestsStackSuccess(state) {
      state.currentDayQuestsStack = state.allQuestsStack[state.currentDay - 1];
    },
    setCurrentDayQuestsStackError(state, action: PayloadAction<string>) {},

    updateCurrentDay(state, action: PayloadAction<number>) {},
    updateCurrentDaySuccess(state, { payload }: PayloadAction<number>) {
      state.currentDay = payload;
    },
    updateCurrentDayError(state, action: PayloadAction<string>) {},

    saveCompletedQuestsId(state, action: PayloadAction<number>) {},
    saveCompletedQuestsIdSuccess(state, { payload }: PayloadAction<number>) {
      if (_.findIndex(state.completedQuestsId, payload) === -1) {
        state.completedQuestsId?.push(payload);
      }
    },
    saveCompletedQuestsIdError(state, action: PayloadAction<string>) {},

    updateInterruptedQuestLine(
      state,
      action: PayloadAction<Nullable<IInterruptedQuestLine>>,
    ) {},
    updateInterruptedQuestLineSuccess(
      state,
      { payload }: PayloadAction<Nullable<IInterruptedQuestLine>>,
    ) {
      state.interruptedQuestLine = payload;
    },
    updateInterruptedQuestLineError(state, action: PayloadAction<string>) {},

    updateCurrentDayQuestsStack() {},
    updateCurrentDayQuestsStackSuccess(state) {
      state.currentDayQuestsStack.pop();
    },
    updateCurrentDayQuestsStackError(state, action: PayloadAction<string>) {},

    setLastDayUpdate() {},
    setLastDayUpdateSuccess(state, { payload }: PayloadAction<number>) {
      state.lastDayUpdate = payload;
    },
    setLastDayUpdateError(state, action: PayloadAction<string>) {},

    setIsCurrentQuestCompleted(state, { payload }: PayloadAction<boolean>) {
      state.isCurrentQuestCompleted = payload;
    },

    getInitialState(state) {
      return { ...INITIAL_STATE, allQuests: state.allQuests };
    },
  },
});
