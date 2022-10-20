import { createSlice } from '@reduxjs/toolkit';

import { ISetSettingsDataPayload, ISettingsData } from '../types';
import CONFIG from '../../config/env';

export interface ISettingsState {
  settings: ISettingsData;
}

const INITIAL_STATE: ISettingsState = {
  settings: {
    language: CONFIG.FALLBACK_LANGUAGE,
    isNotificationsEnabled: true,
    audioSettings: {
      isSoundFXEnabled: true,
      isBackgroundMusicEnabled: true,
    },
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
