import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Timer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Timer'>;

export interface ITimerScreenProps extends NavigationProps, RouteProps {}

export enum TimerType {
  TitleButton = 'titleButton',
}

export interface ITimerRoute {
  type: TimerType;
  duration: number;
  backgroundImage: ImageSourcePropType;
  titleKey?: string;
  onSubmit?: () => void;
}
