import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'DeleteAccountAcknowledgement'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'DeleteAccountAcknowledgement'
>;

export interface IDeleteAccountAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}
