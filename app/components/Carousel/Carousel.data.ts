import { ImageSourcePropType } from 'react-native';

export interface ICarouselItem {
  id: string;
  image?: ImageSourcePropType;
  titleID?: string;
  subTitleID?: string;
}

export enum CarouselType {
  ImageSubTitle = 'imageSubTitle',
  ImageTitleSubTitle = 'imageTitleSubTitle',
}
