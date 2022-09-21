import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SelectPlayer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectPlayer'>;

export interface ISelectPlayerScreenProps extends NavigationProps, RouteProps {}

export interface ISelectPlayerRoute {
  backgroundImage: ImageSourcePropType;
  isCrossHeader: boolean;
}

export interface IPlayer {
  id: string;
  title: string;
  image: ImageSourcePropType;
}
