import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'HelpSupport'>;
type RouteProps = StackScreenProps<MergedStackParams, 'HelpSupport'>;

export interface IHelpSupportScreenProps extends NavigationProps, RouteProps {}
