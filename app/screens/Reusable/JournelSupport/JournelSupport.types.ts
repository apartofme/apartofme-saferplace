import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'JournelSupport'>;
type RouteProps = StackScreenProps<MergedStackParams, 'JournelSupport'>;

export interface IJournelSupportScreenProps
  extends NavigationProps,
    RouteProps {}
