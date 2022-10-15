import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'CloseEyes'>;
type RouteProps = StackScreenProps<MergedStackParams, 'CloseEyes'>;

export interface ICloseEyesScreenProps extends NavigationProps, RouteProps {}
