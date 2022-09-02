export const MAX_TIME = 100;
export const INTERVAL_INCREASE = 1;
export const NEXT_SPEECH = 50;
export const TICK_VALUE = 50;

interface ISpeechListItem {
  titleKey: string;
  subtitleKey: string;
}

export const SPEECH_LIST: ReadonlyArray<ISpeechListItem> = [
  {
    titleKey: 'screens.onboarding.joint.loading.first.title',
    subtitleKey: 'screens.onboarding.joint.loading.first.subtitle',
  },
  {
    titleKey: 'screens.onboarding.joint.loading.second.title',
    subtitleKey: 'screens.onboarding.joint.loading.second.subtitle',
  },
];
