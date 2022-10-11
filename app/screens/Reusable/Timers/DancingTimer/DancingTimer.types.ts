import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'DancingTimer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'DancingTimer'>;

export interface IDancingTimerScreenProps extends NavigationProps, RouteProps {}
