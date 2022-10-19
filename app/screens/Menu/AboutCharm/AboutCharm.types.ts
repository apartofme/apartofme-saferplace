import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { AboutCharmsMenuType } from './AboutCharm.data';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutCharm'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutCharm'>;

export interface IAboutCharmScreenProps extends NavigationProps, RouteProps {}

export interface AboutCharmsMenuItem {
  title: string;
  titleAddition?: string;
  subtitle: string;
  image: ImageSourcePropType;
  type: AboutCharmsMenuType;
}
