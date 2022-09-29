import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'RecognitionDialog'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'RecognitionDialog'>;

export interface IRecognitionDialogScreenProps
  extends NavigationProps,
    RouteProps {}
