import { TryNewSVG } from '../../utils/types';

export interface ITrySomethingCarouselItem {
  id: string;
  iconKey: TryNewSVG;
  title: string;
  subtitle: string;
}

export const CAROUSEL_MODE_CONFIG = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 100,
};
