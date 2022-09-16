export const TIME_TO_NEXT_SPEECH = 5000;

interface ISpeechListItem {
  titleKey: string;
  subtitleKey: string;
}

export const SPEECH_LIST: ReadonlyArray<ISpeechListItem> = [
  {
    titleKey: 'screens.onboarding.joint.loading.first.title',
    subtitleKey: 'screens.onboarding.joint.loading.first.description',
  },
  {
    titleKey: 'screens.onboarding.joint.loading.second.title',
    subtitleKey: 'screens.onboarding.joint.loading.second.description',
  },
];
