import { ViewProps, ViewStyle } from 'react-native';

import { EmotionsCarouselSvgKeys } from '../../utils/types';

export interface IEmotionCarouselProps extends ViewProps {
  data: ReadonlyArray<IEmotionCarouselItem>;
  setIndex: (index: number) => void;
  itemStyle?: ViewStyle;
}

export interface IEmotionCarouselItem {
  id: string;
  iconKey: EmotionsCarouselSvgKeys;
  title: string;
}
