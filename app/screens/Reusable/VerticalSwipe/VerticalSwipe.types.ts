import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'VerticalSwipe'>;
type RouteProps = StackScreenProps<MergedStackParams, 'VerticalSwipe'>;

export interface IVerticalSwipeScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IVerticalSwipeRoute {
  titleKey: string;
  subtitleKey?: string;
  nextRouteParams: NavigationRouteNames;
  tellMoreTitleKey?: string;
  tellMoreSubtitleKey?: string;
  backgroundImage: ImageSourcePropType;
  tellMoreBackgroundImage: ImageSourcePropType;
  image: ImageSourcePropType;
}
