import { createSlice } from '@reduxjs/toolkit';

import { ISetSettingsDataPayload, ISettingsData } from '../types';

export interface ISettingsState {
  settings: ISettingsData;
}

const INITIAL_STATE: ISettingsState = {
  settings: {
    language: 'en',
    isNotificationsEnabled: false,
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: INITIAL_STATE,
  reducers: {
    setSettings(state, { payload }: ISetSettingsDataPayload) {
      state.settings = {
        ...state.settings,
        ...payload,
      };
    },
  },
});
