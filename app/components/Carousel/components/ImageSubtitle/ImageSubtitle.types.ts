import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.types';

export interface IImageSubtitleProps extends ViewProps {
  data: ICarouselItem;
}
