import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ManageProfiles'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ManageProfiles'>;

export interface IManageProfilesScreenProps
  extends NavigationProps,
    RouteProps {}
