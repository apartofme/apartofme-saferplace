import { ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';

import { ISoundCarouselItem } from '../../SoundCarousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: ISoundCarouselItem;
  animValue: Animated.SharedValue<number>;
  index: number;
}
