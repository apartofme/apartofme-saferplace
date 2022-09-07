import { createSlice } from '@reduxjs/toolkit';
import {
  ILanguageActionPayload,
  INotificationAllowActionPayload,
} from '../types';

interface ISettingsState {
  language: string;
  isNotificationAllow: boolean;
}

const INITIAL_STATE: ISettingsState = {
  language: 'en',
  isNotificationAllow: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage(state, { payload: { language } }: ILanguageActionPayload) {
      state.language = language;
    },
    setNotificationAllow(
      state,
      { payload: { isNotificationAllow } }: INotificationAllowActionPayload,
    ) {
      state.isNotificationAllow = isNotificationAllow;
    },
  },
});
