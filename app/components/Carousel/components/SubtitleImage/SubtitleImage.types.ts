import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.types';

export interface ISubtitleImageProps extends ViewProps {
  data: ICarouselItem;
}
