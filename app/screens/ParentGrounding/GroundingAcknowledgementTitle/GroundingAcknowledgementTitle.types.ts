import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { SvgComponentType } from '../../../utils/types';

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
  Icon: SvgComponentType;
  backgroundImage: ImageSourcePropType;
}
