export const MAX_TIME = 100;
export const INTERVAL_INCREASE = 1;
export const NEXT_SPEECH = 50;
export const TICK_VALUE = 50;

interface ISpeechListItem {
  title: string;
  subtitle: string;
}

export const SPEECH_LIST: ISpeechListItem[] = [
  {
    title: 'screens.onboarding.joint.loading.first.title',
    subtitle: 'screens.onboarding.joint.loading.first.subtitle',
  },
  {
    title: 'screens.onboarding.joint.loading.second.title',
    subtitle: 'screens.onboarding.joint.loading.second.subtitle',
  },
];
