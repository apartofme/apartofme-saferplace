import { ViewProps } from 'react-native';

import { IAvatarCarouselItem } from './AvatarCarousel.data';

export interface IAvatarCarouselProps extends ViewProps {
  data: ReadonlyArray<IAvatarCarouselItem>;
  setImage?: (item: string) => void;
}
