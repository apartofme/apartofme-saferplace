import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'ElixirDoubleInteraction'
>;
type RouteProps = StackScreenProps<
  MergedStackParams,
  'ElixirDoubleInteraction'
>;

export interface IElixirDoubleInteractionScreenProps
  extends NavigationProps,
    RouteProps {}

export interface IElixirDoubleInteractionRoute {
  titleKey: string;
  subtitleKey: string;
  onAnimationEnd: () => void;
}
