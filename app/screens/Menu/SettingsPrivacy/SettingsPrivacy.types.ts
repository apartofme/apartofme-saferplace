import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SettingsPrivacy'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SettingsPrivacy'>;

export interface ISettingsPrivacyScreenProps
  extends NavigationProps,
    RouteProps {}
