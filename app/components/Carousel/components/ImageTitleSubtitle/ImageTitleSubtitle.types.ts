import { ViewProps } from 'react-native';

import { ICarouselItem } from '../../Carousel.data';

export interface IImageTitleSubtitleProps extends ViewProps {
  data: ICarouselItem;
}
