import { ViewProps } from 'react-native';
import { ICarouselItem } from '../../Carousel.data';

export interface IImageSubTitleProps extends ViewProps {
  data: ICarouselItem;
}
