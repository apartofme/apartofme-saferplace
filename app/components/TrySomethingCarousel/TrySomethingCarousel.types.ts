import { ViewProps } from 'react-native';

import { ITrySomethingCarouselItem } from './TrySomethingCarousel.data';

export interface ITrySomethingCarouselProps extends ViewProps {
  data: ReadonlyArray<ITrySomethingCarouselItem>;
  setIndex: (index: number) => void;
}
