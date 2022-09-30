import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { PlayerType } from './SelectPlayerSupport.data';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SelectPlayerSupport'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectPlayerSupport'>;

export interface ISelectPlayerSupportScreenProps
  extends NavigationProps,
    RouteProps {}

export interface ISelectPlayerSupportRoute {
  backgroundImage: ImageSourcePropType;
  isCrossHeader: boolean;
}

export interface IPlayer {
  id: PlayerType;
  title: string;
  image: ImageSourcePropType;
}
