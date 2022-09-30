import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import {
  MergedStackParams,
  NavigationRouteNames,
} from '../../../navigation/stacks/mergedParams';
import { ISpeech } from '../../../utils/types';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'RecognitionDialog'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'RecognitionDialog'>;

export interface IRecognitionDialogScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IRecognitionDialogRoute {
  speech: ReadonlyArray<ISpeech>;
  nextRoute: NavigationRouteNames;
}
