import { createSlice } from '@reduxjs/toolkit';
import { ISettingsData, ISettingsDataPayload } from '../types';

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
    setSettings(state, { payload }: ISettingsDataPayload) {
      state.settings = {
        ...state.settings,
        ...payload,
      };
    },
  },
});
