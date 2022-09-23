import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'CharmAlerts'>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmAlerts'>;

export interface ICharmAlertsScreenProps extends NavigationProps, RouteProps {}