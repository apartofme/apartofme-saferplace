import { ImageSourcePropType } from 'react-native';

export interface ISoundCarouselItem {
  id: string;
  image: ImageSourcePropType;
}

export const CAROUSEL_MODE_CONFIG = {
  parallaxScrollingScale: 0.9,
  parallaxScrollingOffset: 230,
  parallaxAdjacentItemScale: 0.4,
};
