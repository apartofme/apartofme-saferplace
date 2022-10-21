import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.types';

export interface IAvatarProps extends ViewProps {
  data: ICarouselItem;
  isActive: boolean;
}
