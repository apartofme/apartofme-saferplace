import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Journel'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Journel'>;

export interface IJournelScreenProps extends NavigationProps, RouteProps {}

export interface IJournelRoute {
  backgroundImage: ImageSourcePropType;
}
