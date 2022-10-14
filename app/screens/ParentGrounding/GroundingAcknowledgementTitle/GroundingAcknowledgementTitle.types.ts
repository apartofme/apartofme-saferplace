import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingAcknowledgementTitle'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'GroundingAcknowledgementTitle'
>;

export interface IGroundingAcknowledgementTitleScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IGroundingAcknowledgementTitleRoute {
  title: string;
  subtitle: string;
  buttonTitle: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onNextRouteName: NavigationRouteNames;
}
