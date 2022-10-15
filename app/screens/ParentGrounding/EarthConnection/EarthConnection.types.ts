import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'EarthConnection'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'EarthConnection'>;

export interface IEarthConnectionScreenProps
  extends NavigationProps,
    RouteProps {}
