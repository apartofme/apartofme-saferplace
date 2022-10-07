import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementSuccessivelyDoubleButton'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementSuccessivelyDoubleButton'
>;

export interface IAcknowledgementSuccessivelyDoubleButtonScreenProps
  extends NavigationProps,
    RouteProps {}
