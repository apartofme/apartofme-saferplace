import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementDoubleImageDoubleButton'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementDoubleImageDoubleButton'
>;

export interface IAcknowledgementDoubleImageDoubleButtonScreenProps
  extends NavigationProps,
    RouteProps {}
