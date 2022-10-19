import { IMAGES } from '../../../../assets';
import { ICarouselItem } from '../../../../components';

// TODO: change image for correct
export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: IMAGES.MUSHROOM_MAN_IN_TREES,
    titleKey: 'screens.onboarding.onboard_carousel.first.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.first.description',
  },
  {
    id: '2',
    image: IMAGES.BIRD_ON_BRANCHES,
    titleKey: 'screens.onboarding.onboard_carousel.second.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.second.description',
  },
  {
    id: '3',
    image: IMAGES.HAPPY_TREE_ON_GRASS,
    titleKey: 'screens.onboarding.onboard_carousel.third.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.third.description',
  },
  {
    id: '4',
    image: IMAGES.BOOK_ON_LEAVES,
    titleKey: 'screens.onboarding.onboard_carousel.fourth.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.fourth.description',
  },
];
