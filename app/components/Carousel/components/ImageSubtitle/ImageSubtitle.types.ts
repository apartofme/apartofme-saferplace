import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.data';

export interface IImageSubtitleProps extends ViewProps {
  data: ICarouselItem;
}
