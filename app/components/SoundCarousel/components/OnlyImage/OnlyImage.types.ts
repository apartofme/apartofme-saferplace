import { ViewProps } from 'react-native';

import { ISoundCarouselItem } from '../../SoundCarousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: ISoundCarouselItem;
}
