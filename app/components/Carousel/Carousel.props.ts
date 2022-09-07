import { ImageSourcePropType, ViewProps } from 'react-native';

import { CarouselType, ICarouselItem } from './Carousel.data';

export interface ICarouselProps extends ViewProps {
  data: ReadonlyArray<ICarouselItem>;
  preset: CarouselType;
  setCurrentPossition?: (item: number) => void;
  setImage?: (item: ImageSourcePropType) => void;
}
