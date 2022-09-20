import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.data';

export interface ISubtitleImageProps extends ViewProps {
  data: ICarouselItem;
}
