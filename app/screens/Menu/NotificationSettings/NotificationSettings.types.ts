import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'NotificationSettings'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'NotificationSettings'>;

export interface INotificationSettingsScreenProps
  extends NavigationProps,
    RouteProps {}
