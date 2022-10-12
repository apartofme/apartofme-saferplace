import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'GroundingStart'>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingStart'>;

export interface IGroundingStartScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingStartRoute {
  image: ImageSourcePropType;
  titleKey: string;
  subtitleKey: string;
  aboutTitleKey: string;
  aboutSubtitleKey: string;
  topBackground: ImageSourcePropType;
  bottomBackground: ImageSourcePropType;
  nextRouteName: NavigationRouteNames;
}
