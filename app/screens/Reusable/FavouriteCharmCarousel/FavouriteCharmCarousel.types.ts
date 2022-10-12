import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'FavouriteCharmCarousel'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'FavouriteCharmCarousel'>;

export interface IFavouriteCharmCarouselScreenProps
  extends NavigationProps,
    RouteProps {}
