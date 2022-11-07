import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SelectUserAcknowledgement'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'SelectUserAcknowledgement'
>;

export interface ISelectUserAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}
