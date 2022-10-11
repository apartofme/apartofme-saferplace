import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { Nullable } from '../../../utils';

type NavigationProps = StackNavigationProp<MergedStackParams, 'EscapeMenu'>;
type RouteProps = StackScreenProps<MergedStackParams, 'EscapeMenu'>;

export interface IEscapeMenuScreenProps extends NavigationProps, RouteProps {}

export interface IEscapeMenuRoute {
  escapeMenuAlternativeNavigateTo: Nullable<string>;
}
