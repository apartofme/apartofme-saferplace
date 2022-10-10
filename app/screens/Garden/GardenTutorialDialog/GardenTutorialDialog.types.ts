import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GardenTutorialDialog'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'GardenTutorialDialog'>;

export interface IGardenTutorialDialogScreenProps
  extends NavigationProps,
    RouteProps {}
