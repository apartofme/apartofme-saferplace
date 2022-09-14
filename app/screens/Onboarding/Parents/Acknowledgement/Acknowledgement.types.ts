import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'Acknowledgement'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'Acknowledgement'>;

export interface IAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}
