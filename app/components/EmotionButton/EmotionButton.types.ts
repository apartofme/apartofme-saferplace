import { Nullable } from '../../utils';
import { EmotionsButtonSvgKeys } from '../../utils/types';
import { EmotionButtonType } from './EmotionButton.data';

export interface IEmotionButtonProps {
  data: ReadonlyArray<IEmotionButton>;
  setSelected: (item: Nullable<EmotionButtonType>) => void;
}

export interface IEmotionButton {
  title: string;
  iconKey: EmotionsButtonSvgKeys;
  type: EmotionButtonType;
}
