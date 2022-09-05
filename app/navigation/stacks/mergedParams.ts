import { HomeStackParams } from './homeStackNavigator';
import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';
import { JointOnboardingStackParams } from './jointOnboardingStackNavigator';
import { EndSequenceStackParams } from './endSequenceStackNavigator';

export type MergedStackParams = HomeStackParams &
  RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams &
  EndSequenceStackParams &
  JointOnboardingStackParams;
