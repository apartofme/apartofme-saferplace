import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'CharmAlertsTryAgain'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmAlertsTryAgain'>;

export interface ICharmAlertsTryAgainScreenProps
  extends NavigationProps,
    RouteProps {}
