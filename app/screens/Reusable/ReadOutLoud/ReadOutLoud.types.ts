import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ReadOutLoud'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ReadOutLoud'>;

export interface IReadOutLoudScreenProps extends NavigationProps, RouteProps {}
