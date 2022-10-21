import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.types';

export interface IOnlyImageProps extends ViewProps {
  data: ICarouselItem;
}
