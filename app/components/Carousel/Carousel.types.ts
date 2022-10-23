import { ViewProps, ViewStyle } from 'react-native';

import { AvatarsNameType, SvgComponentType } from '../../utils/types';
import { CarouselType } from './Carousel.data';

export interface ICarouselProps extends ViewProps {
  data: ReadonlyArray<ICarouselItem>;
  preset: CarouselType;
  defaultIndex?: number;
  setIndex?: (index: number) => void;
  carouselStyle?: ViewStyle;
  carouselItemStyle?: ViewStyle;
}

type CarouselImageType = SvgComponentType | AvatarsNameType;

export interface ICarouselItem {
  id: string;
  image?: CarouselImageType;
  titleKey?: string;
  subtitleKey?: string;
}

export interface IAvatarCarouselItem {
  id: string;
  image: AvatarsNameType;
}

export interface ICarouselItemProps extends ViewProps {
  data: ICarouselItem;
  isActive?: boolean;
}
