import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SelectSound'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectSound'>;

export interface ISelectSoundScreenProps extends NavigationProps, RouteProps {}
