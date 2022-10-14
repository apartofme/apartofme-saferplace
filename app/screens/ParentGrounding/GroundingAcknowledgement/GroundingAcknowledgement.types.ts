import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingAcknowledgement'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'GroundingAcknowledgement'
>;

export interface IGroundingAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingAcknowledgementRoute {
  title: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onNextRouteName: NavigationRouteNames;
}
