import { EmotionButtonType, IEmotionButton } from '../../../components';

export const EMOTION_BUTTON_LIST: ReadonlyArray<IEmotionButton> = [
  {
    title: 'Angry',
    iconKey: 'AngryCircleEmotionIcon',
    type: EmotionButtonType.Angry,
  },
  {
    title: 'Scared',
    iconKey: 'ScaredCircleEmotionIcon',
    type: EmotionButtonType.Scared,
  },
  {
    title: 'Lonely',
    iconKey: 'LonelySorryEmotionIcon',
    type: EmotionButtonType.Lonely,
  },
];
