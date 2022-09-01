import { HomeStackParams } from './homeStackNavigator';
import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';

export type MergedStackParams = HomeStackParams &
  RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams;
