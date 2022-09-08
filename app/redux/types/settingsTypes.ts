export interface ISettingsData {
  language?: string;
  isNotificationsEnabled?: boolean;
}

export type ISettingsDataPayload = {
  payload: Partial<ISettingsData>;
};
