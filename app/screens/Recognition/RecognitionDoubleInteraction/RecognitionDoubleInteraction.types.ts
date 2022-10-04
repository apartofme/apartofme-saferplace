import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'RecognitionDoubleInteraction'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'RecognitionDoubleInteraction'
>;

export interface IRecognitionDoubleInteractionScreenProps
  extends NavigationProps,
    RouteProps {}
