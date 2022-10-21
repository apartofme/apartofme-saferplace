import { ViewProps, ViewStyle } from 'react-native';

import { AvatarsNameType, ImagesKeys } from '../../utils/types';
import { CarouselType } from './Carousel.data';

export interface ICarouselProps extends ViewProps {
  data: ReadonlyArray<ICarouselItem>;
  preset: CarouselType;
  setIndex?: (index: number) => void;
  carouselStyle?: ViewStyle;
  carouselItemStyle?: ViewStyle;
}

export interface ICarouselItem {
  id: string;
  image?: ImagesKeys | AvatarsNameType;
  titleKey?: string;
  subtitleKey?: string;
}
