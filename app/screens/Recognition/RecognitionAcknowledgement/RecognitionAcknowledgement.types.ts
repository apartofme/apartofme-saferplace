import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'RecognitionAcknowledgement'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'RecognitionAcknowledgement'
>;

export interface IRecognitionAcknowledgementScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IRecognitionAcknowledgementRoute {
  isMultipleChoice: boolean;
}
