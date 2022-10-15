import { ImageSourcePropType } from 'react-native';

import { Nullable } from '../../utils';
import { EmotionButtonType } from './EmotionButton.data';

export interface IEmotionButtonProps {
  data: ReadonlyArray<IEmotionButton>;
  setSelected: (item: Nullable<EmotionButtonType>) => void;
}

export interface IEmotionButton {
  title: string;
  image: ImageSourcePropType;
  type: EmotionButtonType;
}
