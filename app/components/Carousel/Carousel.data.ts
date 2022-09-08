import { ImageSourcePropType } from 'react-native';

export interface ICarouselItem {
  id: string;
  image?: ImageSourcePropType;
  titleKey?: string;
  subtitleKey?: string;
}

export enum CarouselType {
  ImageSubTitle = 'imageSubTitle',
  ImageTitleSubTitle = 'imageTitleSubTitle',
  OnlyImage = 'onlyImage',
}
