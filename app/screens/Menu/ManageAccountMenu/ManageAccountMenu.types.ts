import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ManageAccountMenu'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ManageAccountMenu'>;

export interface IManageAccountMenuScreenProps
  extends NavigationProps,
    RouteProps {}
