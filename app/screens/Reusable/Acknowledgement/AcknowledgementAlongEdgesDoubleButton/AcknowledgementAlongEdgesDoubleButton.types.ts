import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementAlongEdgesDoubleButton'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementAlongEdgesDoubleButton'
>;

export interface IAcknowledgementAlongEdgesDoubleButtonScreenProps
  extends NavigationProps,
    RouteProps {}
