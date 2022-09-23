import { RefObject } from 'react';
import { ViewProps } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { ISoundCarouselItem } from './SoundCarousel.data';

export interface ISoundCarouselItemProps extends ViewProps {
  data: ReadonlyArray<ISoundCarouselItem>;
  setCurrentPossition?: (item: number) => void;
  setCurrentSong: (item: string) => void;
  carouselRef?: RefObject<ICarouselInstance>;
}
