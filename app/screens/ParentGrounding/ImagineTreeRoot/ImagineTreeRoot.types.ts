import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ImagineTreeRoot'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'ImagineTreeRoot'>;

export interface IImagineTreeRootScreenProps
  extends NavigationProps,
    RouteProps {}
