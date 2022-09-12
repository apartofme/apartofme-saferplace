import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';
import { JointOnboardingStackParams } from './jointOnboardingStackNavigator';

export type MergedStackParams = RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams &
  JointOnboardingStackParams;

export type NavigationRouteNames = keyof MergedStackParams;
