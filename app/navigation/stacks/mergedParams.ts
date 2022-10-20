import { ParentsOnboardingStackParams } from './parentsOnboardingStackNavigator';
import { RootParams } from '../rootNavigator';
import { MenuStackParams } from './menuStackNavigator';
import { JointOnboardingStackParams } from './jointOnboardingStackNavigator';
import { RecognitionStackParams } from './RecognitionStackNavigator';
import { QuestStackParams } from './questStackNavigator';
import { GardenStackParams } from './gardenStackNavigator';
import { MixingElixirStackParams } from './mixingElixirStackNavigator';
import { ParentGroundingStackParams } from './parentGroundingStackNavigator';
import { BefriendingStackParams } from './befriendingStackNavigator';

export type MergedStackParams = RootParams &
  MenuStackParams &
  ParentsOnboardingStackParams &
  JointOnboardingStackParams &
  QuestStackParams &
  RecognitionStackParams &
  MixingElixirStackParams &
  GardenStackParams &
  ParentGroundingStackParams &
  BefriendingStackParams;

export type NavigationRouteNames = keyof MergedStackParams;
