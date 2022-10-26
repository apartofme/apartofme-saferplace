import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementReadLoud'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementReadLoud'
>;

export interface IAcknowledgementReadLoudScreenProps
  extends NavigationProps,
    RouteProps {}
