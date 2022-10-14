import { ViewProps, ViewStyle } from 'react-native';

export interface IEmotionCarouselProps extends ViewProps {
  data: ReadonlyArray<IEmotionCarouselItem>;
  setIndex: (index: number) => void;
  itemStyle?: ViewStyle;
}

export interface IEmotionCarouselItem {
  id: string;
  title: string;
}
