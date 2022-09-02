import { IMAGES } from '../../../../assets';
import { ICarouselItem } from '../../../../components';

// TODO: change image for correct
export const CHARMS_CAROUSEL: ICarouselItem[] = [
  {
    id: '1',
    image: IMAGES.WHITE_PENCIL,
    titleKey: 'screens.onboarding.charms_introducing.first.title',
    subtitleKey: 'screens.onboarding.charms_introducing.first.subtitle',
  },
  {
    id: '2',
    image: IMAGES.WHITE_PENCIL,
    titleKey: 'screens.onboarding.charms_introducing.second.title',
    subtitleKey: 'screens.onboarding.charms_introducing.second.subtitle',
  },
  {
    id: '3',
    image: IMAGES.WHITE_PENCIL,
    titleKey: 'screens.onboarding.charms_introducing.third.title',
    subtitleKey: 'screens.onboarding.charms_introducing.third.subtitle',
  },
];

export const ABSOLUTE_PROGRESS_VALUE = 1.1;
