import { ImageSourcePropType } from 'react-native';

export interface ICarouselItem {
  id: string;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}
