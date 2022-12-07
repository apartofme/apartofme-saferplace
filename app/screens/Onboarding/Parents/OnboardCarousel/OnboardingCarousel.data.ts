import { BackgroundImagesKeys } from '../../../../utils/types';

export interface IOnboardCarouselItem {
  id: string;
  backgrountKey: BackgroundImagesKeys;
  titleKey?: string;
  descriptionKey?: string;
}

export const CHARMS_CAROUSEL: ReadonlyArray<IOnboardCarouselItem> = [
  {
    id: '1',
    backgrountKey: 'ONBOARDING_CAROUSEL_GUIDE_IN_TREES',
    titleKey: 'screens.onboarding.onboard_carousel.first.title',
    descriptionKey: 'screens.onboarding.onboard_carousel.first.description',
  },
  {
    id: '2',
    backgrountKey: 'ONBOARDING_CAROUSEL_BIRD_ON_BRANCHES',
    titleKey: 'screens.onboarding.onboard_carousel.second.title',
    descriptionKey: 'screens.onboarding.onboard_carousel.second.description',
  },
  {
    id: '3',
    backgrountKey: 'ONBOARDING_CAROUSEL_HAPPY_NADIYA_TREE',
    titleKey: 'screens.onboarding.onboard_carousel.third.title',
    descriptionKey: 'screens.onboarding.onboard_carousel.third.description',
  },
  {
    id: '4',
    backgrountKey: 'ONBOARDING_CAROUSEL_BOOK_ON_LEAVES',
    titleKey: 'screens.onboarding.onboard_carousel.fourth.title',
    descriptionKey: 'screens.onboarding.onboard_carousel.fourth.description',
  },
];
