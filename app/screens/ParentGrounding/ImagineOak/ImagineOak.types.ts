import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ImagineOak'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ImagineOak'>;

export interface IImagineOakScreenProps extends NavigationProps, RouteProps {}
