import { ImageSourcePropType } from 'react-native';

import { IMAGES } from '../../../assets';

export interface IFeltRecentItem {
  titleKey: string;
  image: ImageSourcePropType;
}

export const FELT_RECENT_DATA: ReadonlyArray<IFeltRecentItem> = [
  {
    titleKey: 'screens.reusable.felt_recent.first_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.second_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.third_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.fourth_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.fifth_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.sixth_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.seventh_item',
    image: IMAGES.WHITE_PENCIL,
  },
  {
    titleKey: 'screens.reusable.felt_recent.eighth_item',
    image: IMAGES.WHITE_PENCIL,
  },
];
