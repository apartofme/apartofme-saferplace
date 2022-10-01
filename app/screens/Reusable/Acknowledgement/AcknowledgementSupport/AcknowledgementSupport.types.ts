import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementSupport'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'AcknowledgementSupport'>;

export interface IAcknowledgementSupportScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IAcknowledgementSupportRoute {
  title: string;
  image: ImageSourcePropType;
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
