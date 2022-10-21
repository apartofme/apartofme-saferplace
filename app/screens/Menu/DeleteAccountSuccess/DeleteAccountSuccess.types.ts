import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'DeleteAccountSuccess'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'DeleteAccountSuccess'>;

export interface IDeleteAccountSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
