export interface IAudioSettings {
  isSoundFXEnabled?: boolean;
  isBackgroundMusicEnabled?: boolean;
}

export interface ISettingsData {
  language?: string;
  isNotificationsEnabled?: boolean;
  audioSettings?: IAudioSettings;
}

export type ISetSettingsDataPayload = {
  payload: Partial<ISettingsData>;
};
