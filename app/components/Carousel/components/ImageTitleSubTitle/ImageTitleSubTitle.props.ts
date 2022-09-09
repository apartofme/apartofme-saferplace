import { ViewProps } from 'react-native';
import { ICarouselItem } from '../../Carousel.data';

export interface IImageTitleSubTitleProps extends ViewProps {
  data: ICarouselItem;
}
