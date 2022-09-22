import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';
import { JointOnboardingStackParams } from './jointOnboardingStackNavigator';
import { RecognitionStackParams } from './RecognitionStackNavigator';
import { QuestStackParams } from './questStackNavigator';

export type MergedStackParams = RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams &
  JointOnboardingStackParams &
  QuestStackParams &
  RecognitionStackParams;

export type NavigationRouteNames = keyof MergedStackParams;
