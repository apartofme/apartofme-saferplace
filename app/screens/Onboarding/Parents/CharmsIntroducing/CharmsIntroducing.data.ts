import { IMAGES } from '../../../../assets';
import { ICarouselItem } from '../../../../components';

// TODO: change image for correct
export const CHARMS_CAROUSEL: ReadonlyArray<ICarouselItem> = [
  {
    id: '1',
    image: IMAGES.WHITE_PENCIL,
    titleID: 'screens.onboarding.charms_introducing.first.title',
    subTitleID: 'screens.onboarding.charms_introducing.first.subTitle',
  },
  {
    id: '2',
    image: IMAGES.WHITE_PENCIL,
    titleID: 'screens.onboarding.charms_introducing.second.title',
    subTitleID: 'screens.onboarding.charms_introducing.second.subTitle',
  },
  {
    id: '3',
    image: IMAGES.WHITE_PENCIL,
    titleID: 'screens.onboarding.charms_introducing.third.title',
    subTitleID: 'screens.onboarding.charms_introducing.third.subTitle',
  },
];

export const ABSOLUTE_PROGRESS_VALUE = 1.1;
