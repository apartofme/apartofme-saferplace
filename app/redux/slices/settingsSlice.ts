import { createSlice } from '@reduxjs/toolkit';

import { ISettingsActionPayload } from '../types';

interface ISettingsState {
  language: string;
}

const INITIAL_STATE: ISettingsState = {
  language: 'en',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage(state, { payload: { language } }: ISettingsActionPayload) {
      state.language = language;
    },
  },
});
