import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'FeltRecent'>;
type RouteProps = StackScreenProps<MergedStackParams, 'FeltRecent'>;

export interface IFeltRecentScreenProps extends NavigationProps, RouteProps {}

export interface IFeltRecentRoute {
  title: string;
  subtitle: string;
}

export interface IFeltRecentItem {
  titleKey: string;
  image: ImageSourcePropType;
}