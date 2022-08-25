import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Reanimated'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Reanimated'>;

export interface IReanimatedScreenProps extends NavigationProps, RouteProps {}
