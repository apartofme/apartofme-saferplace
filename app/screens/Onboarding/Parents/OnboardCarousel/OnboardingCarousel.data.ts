import { SVG } from '../../../../assets/svg';
import { ICarouselItem } from '../../../../components';

export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: SVG.GuideInTreesIcon,
    titleKey: 'screens.onboarding.onboard_carousel.first.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.first.description',
  },
  {
    id: '2',
    image: SVG.BirdOnBranchesIcon,
    titleKey: 'screens.onboarding.onboard_carousel.second.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.second.description',
  },
  {
    id: '3',
    image: SVG.HappyNadiyaTreeIcon,
    titleKey: 'screens.onboarding.onboard_carousel.third.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.third.description',
  },
  {
    id: '4',
    image: SVG.BookOnLeavesIcon,
    titleKey: 'screens.onboarding.onboard_carousel.fourth.title',
    subtitleKey: 'screens.onboarding.onboard_carousel.fourth.description',
  },
];
