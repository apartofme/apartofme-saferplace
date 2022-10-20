import { SVG } from '../../../../assets/svg';
import { ICarouselItem } from '../../../../components';

export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: SVG.GUIDE_IN_TREES_ICON,
    titleKey: 'screens.onboarding.onboard_carousel.first.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.first.description',
  },
  {
    id: '2',
    image: SVG.BIRD_ON_BRANCHES_ICON,
    titleKey: 'screens.onboarding.onboard_carousel.second.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.second.description',
  },
  {
    id: '3',
    image: SVG.HAPPY_NADIYA_TREE_ICON,
    titleKey: 'screens.onboarding.onboard_carousel.third.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.third.description',
  },
  {
    id: '4',
    // TODO: change to correct image
    image: SVG.BIRD_ON_BRANCHES_ICON,
    titleKey: 'screens.onboarding.onboard_carousel.fourth.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.fourth.description',
  },
];
