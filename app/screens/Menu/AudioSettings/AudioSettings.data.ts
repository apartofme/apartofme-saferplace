export enum IAudioSettingsMenuItemType {
  SoundFX = 'isSoundFXEnabled',
  BackgroundMusic = 'isBackgroundMusicEnabled',
}

export interface IAudioSettingsMenuItem {
  title: string;
  type: IAudioSettingsMenuItemType;
}

export const AUDIO_SETTINGS_MENU: IAudioSettingsMenuItem[] = [
  {
    title: 'screens.menu.audio_settings.is_sound_fx_enabled',
    type: IAudioSettingsMenuItemType.SoundFX,
  },
  {
    title: 'screens.menu.audio_settings.is_background_music_enabled',
    type: IAudioSettingsMenuItemType.BackgroundMusic,
  },
];
