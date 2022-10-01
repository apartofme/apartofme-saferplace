import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'RecognitionDoubleInteractionSuccess'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'RecognitionDoubleInteractionSuccess'
>;

export interface IRecognitionDoubleInteractionSuccessScreenProps
  extends NavigationProps,
    RouteProps {}
