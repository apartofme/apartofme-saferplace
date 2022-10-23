import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'DeleteAccount'>;
type RouteProps = StackScreenProps<MergedStackParams, 'DeleteAccount'>;

export interface IDeleteAccountScreenProps
  extends NavigationProps,
    RouteProps {}
