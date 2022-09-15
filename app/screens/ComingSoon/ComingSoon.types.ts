import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ComingSoon'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ComingSoon'>;

export interface IComingSoonScreenProps extends NavigationProps, RouteProps {}
