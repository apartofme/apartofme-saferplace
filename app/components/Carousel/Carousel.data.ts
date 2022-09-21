import { ImageSourcePropType } from 'react-native';

export interface ICarouselItem {
  id: string;
  image?: ImageSourcePropType;
  titleKey?: string;
  subtitleKey?: string;
}

export enum CarouselType {
  SubtitleImage = 'SubtitleImage',
  ImageTitleSubtitle = 'imageTitleSubtitle',
  OnlyImage = 'onlyImage',
  ImageSubtitle = 'imageSubtitle',
}
