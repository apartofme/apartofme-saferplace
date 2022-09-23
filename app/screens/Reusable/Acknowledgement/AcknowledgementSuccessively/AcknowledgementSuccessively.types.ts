import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementSuccessively'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementSuccessively'
>;

export interface IAcknowledgementSuccessivelyScreenProps
  extends NavigationProps,
    RouteProps {}
