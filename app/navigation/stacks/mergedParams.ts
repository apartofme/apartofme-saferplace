import { HomeStackParams } from './homeStackNavigator';
import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';
import { JointOnboardingStackParams } from './jointOnboardingStackNavigator';

export type MergedStackParams = HomeStackParams &
  RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams &
  JointOnboardingStackParams;
