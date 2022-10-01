import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementDoubleImage'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementDoubleImage'
>;

export interface IAcknowledgementDoubleImageScreenProps
  extends NavigationProps,
    RouteProps {}
