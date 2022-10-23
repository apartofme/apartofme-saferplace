import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.types';

export interface IImageTitleSubtitleProps extends ViewProps {
  data: ICarouselItem;
}
