import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: ICarouselItem;
}
