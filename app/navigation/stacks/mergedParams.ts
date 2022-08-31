import { HomeStackParams } from './homeStackNavigator';
import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';

export type MergedStackParams = HomeStackParams &
  RootParams &
  ParentsOnboardingStackParams;
