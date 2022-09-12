export interface ISettingsData {
  language?: string;
  isNotificationsEnabled?: boolean;
}

export type ISetSettingsDataPayload = {
  payload: Partial<ISettingsData>;
};
