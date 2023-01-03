import { EmotionButtonType, IEmotionButton } from '../../../components';

export const EMOTION_BUTTON_LIST: ReadonlyArray<IEmotionButton> = [
  {
    title: 'labels.angry',
    iconKey: 'AngryCircleEmotionIcon',
    type: EmotionButtonType.Angry,
  },
  {
    title: 'labels.scared',
    iconKey: 'ScaredCircleEmotionIcon',
    type: EmotionButtonType.Scared,
  },
  {
    title: 'labels.lonely',
    iconKey: 'LonelySorryEmotionIcon',
    type: EmotionButtonType.Lonely,
  },
];
