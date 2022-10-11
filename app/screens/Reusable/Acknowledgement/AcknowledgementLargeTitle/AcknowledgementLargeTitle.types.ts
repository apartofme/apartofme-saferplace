import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'AcknowledgementLargeTitle'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'AcknowledgementLargeTitle'
>;

export interface IAcknowledgementLargeTitleScreenProps
  extends NavigationProps,
    RouteProps {}
