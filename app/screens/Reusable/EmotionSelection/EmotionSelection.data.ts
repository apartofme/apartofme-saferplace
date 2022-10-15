import { EmotionButtonType, IEmotionButton } from '../../../components';

// TODO: change to correct data
export const EMOTION_BUTTON_LIST: ReadonlyArray<IEmotionButton> = [
  {
    title: 'Scared',
    image: {
      uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c4af.png',
    },
    type: EmotionButtonType.Scared,
  },
  {
    title: 'Angry',
    image: {
      uri: 'https://i.pinimg.com/originals/85/6c/72/856c72c52a0be9efbc5315927e1fff85.png',
    },
    type: EmotionButtonType.Angry,
  },
  {
    title: 'Lonely',
    image: {
      uri: 'https://cdn.pixabay.com/photo/2020/12/27/20/24/emoji-5865207_960_720.png',
    },
    type: EmotionButtonType.Lonely,
  },
];
