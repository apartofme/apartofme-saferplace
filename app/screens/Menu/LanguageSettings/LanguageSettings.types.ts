import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'LanguageSettings'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'LanguageSettings'>;

export interface ILanguageSettingsScreenProps
  extends NavigationProps,
    RouteProps {}
