import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'CharmBookMenu'>;
type RouteProps = StackScreenProps<MergedStackParams, 'CharmBookMenu'>;

export interface ICharmBookMenuScreenProps
  extends NavigationProps,
    RouteProps {}

export enum CharmBookMenuType {
  NewCharm = 'NewCharm',
  NoneCharm = 'NoneCharm',
  InterruptedCharm = 'InterruptedCharm',
}
