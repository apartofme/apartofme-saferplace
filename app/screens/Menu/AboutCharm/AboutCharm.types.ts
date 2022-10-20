import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { ISvgProps } from '../../../utils/types';
import { AboutCharmsMenuType } from './AboutCharm.data';

type NavigationProps = StackNavigationProp<MergedStackParams, 'AboutCharm'>;
type RouteProps = StackScreenProps<MergedStackParams, 'AboutCharm'>;

export interface IAboutCharmScreenProps extends NavigationProps, RouteProps {}

export interface AboutCharmsMenuItem {
  title: string;
  titleAddition?: string;
  subtitle: string;
  IconSvgComponent: (props: ISvgProps) => JSX.Element;
  type: AboutCharmsMenuType;
}
