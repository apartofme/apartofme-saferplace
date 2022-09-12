import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutCharm'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutCharm'>;

export interface IAboutCharmScreenProps extends NavigationProps, RouteProps {}
