import { ImageSourcePropType } from 'react-native';

import { CarouselType, ICarouselItem } from './Carousel.data';

export interface ICarouselProps {
  data: ReadonlyArray<ICarouselItem>;
  preset: CarouselType;
  setCurrentPossition?: (item: number) => void;
  setImage?: (item: ImageSourcePropType) => void;
}
