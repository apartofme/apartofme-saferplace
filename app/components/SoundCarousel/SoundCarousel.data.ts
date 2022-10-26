import { SvgDancingCharmKeys } from '../../utils/types';

export interface ISoundCarouselItem {
  id: string;
  iconKey: SvgDancingCharmKeys;
}

export const CAROUSEL_MODE_CONFIG = {
  parallaxScrollingScale: 1,
  parallaxScrollingOffset: 140,
};
