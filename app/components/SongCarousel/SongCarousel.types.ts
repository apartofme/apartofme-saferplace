import { RefObject } from 'react';
import { ViewProps } from 'react-native';
import { ICarouselInstance } from 'react-native-reanimated-carousel';

import { ISongCarouselItem } from './SongCarousel.data';

export interface ISongCarouselItemProps extends ViewProps {
  data: ReadonlyArray<ISongCarouselItem>;
  setCurrentPossition?: (item: number) => void;
  setCurrentSong: (item: string) => void;
  carouselRef?: RefObject<ICarouselInstance>;
}
