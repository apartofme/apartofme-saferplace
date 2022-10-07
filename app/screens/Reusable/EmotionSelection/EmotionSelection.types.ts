import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EmotionSelection'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EmotionSelection'>;

export interface IEmotionSelectionScreenProps
  extends NavigationProps,
    RouteProps {}
