import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'LanguageSelection'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'LanguageSelection'>;

export interface ILanguageSelectionScreenProps
  extends NavigationProps,
    RouteProps {}
