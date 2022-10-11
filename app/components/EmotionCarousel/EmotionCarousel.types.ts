import { ViewProps } from 'react-native';

export interface IEmotionCarouselProps extends ViewProps {
  data: ReadonlyArray<IEmotionCarouselItem>;
  setIndex: (index: number) => void;
}

export interface IEmotionCarouselItem {
  id: string;
  title: string;
}
