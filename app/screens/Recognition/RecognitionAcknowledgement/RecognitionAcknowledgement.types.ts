import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { RecognitionAcknowledgementType } from './RecognitionAcknowledgement.data';

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
  type: RecognitionAcknowledgementType;
}
