import { SVG_CHARM_ILLUSTRATIONS } from '../../../../assets/svg';
import { ICarouselItem } from '../../../../components';

// TODO: change to correct images
export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: SVG_CHARM_ILLUSTRATIONS.AcceptanceIllustrationIcon,
    titleKey: 'screens.onboarding.charms_introducing.first.title',
    subtitleKey: 'screens.onboarding.charms_introducing.first.description',
  },
  {
    id: '2',
    image: SVG_CHARM_ILLUSTRATIONS.KindnessIllustrationIcon,
    titleKey: 'screens.onboarding.charms_introducing.second.title',
    subtitleKey: 'screens.onboarding.charms_introducing.second.description',
  },
  {
    id: '3',
    image: SVG_CHARM_ILLUSTRATIONS.DancingIllustrationIcon,
    titleKey: 'screens.onboarding.charms_introducing.third.title',
    subtitleKey: 'screens.onboarding.charms_introducing.third.description',
  },
];

export const ABSOLUTE_PROGRESS_VALUE = 1.1;
