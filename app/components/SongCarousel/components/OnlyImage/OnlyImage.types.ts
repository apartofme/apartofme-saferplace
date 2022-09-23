import { ViewProps } from 'react-native';

import { ISongCarouselItem } from '../../SongCarousel.data';

export interface IOnlyImageProps extends ViewProps {
  data: ISongCarouselItem;
}
