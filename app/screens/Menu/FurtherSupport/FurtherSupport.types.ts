import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'FurtherSupport'>;
type RouteProps = StackScreenProps<MergedStackParams, 'FurtherSupport'>;

export interface IFurtherSupportScreenProps
  extends NavigationProps,
    RouteProps {}
