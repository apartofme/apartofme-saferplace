import { SVG } from '../../../../assets/svg';
import { ICarouselItem } from '../../../../components';

// TODO: change to correct images
export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: SVG.BirdOnBranchesIcon,
    titleKey: 'screens.onboarding.charms_introducing.first.title',
    subtitleKey: 'screens.onboarding.charms_introducing.first.subtitle',
  },
  {
    id: '2',
    image: SVG.BirdOnBranchesIcon,
    titleKey: 'screens.onboarding.charms_introducing.second.title',
    subtitleKey: 'screens.onboarding.charms_introducing.second.subtitle',
  },
  {
    id: '3',
    image: SVG.BirdOnBranchesIcon,
    titleKey: 'screens.onboarding.charms_introducing.third.title',
    subtitleKey: 'screens.onboarding.charms_introducing.third.subtitle',
  },
];

export const ABSOLUTE_PROGRESS_VALUE = 1.1;
