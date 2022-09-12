import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutUs'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutUs'>;

export interface IAboutUsScreenProps extends NavigationProps, RouteProps {}
