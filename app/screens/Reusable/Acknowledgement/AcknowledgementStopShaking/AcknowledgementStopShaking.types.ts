import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementStopShaking'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementStopShaking'
>;

export interface IAcknowledgementStopShakingScreenProps
  extends NavigationProps,
    RouteProps {}
