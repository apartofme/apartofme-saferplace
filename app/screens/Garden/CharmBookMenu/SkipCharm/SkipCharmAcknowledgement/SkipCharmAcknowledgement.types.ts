import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SkipCharmAcknowledgement'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'SkipCharmAcknowledgement'
>;

export interface ISkipCharmAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}
