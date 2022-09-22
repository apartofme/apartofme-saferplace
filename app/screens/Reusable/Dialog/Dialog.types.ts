import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Dialog'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Dialog'>;

export interface IDialogScreenProps extends NavigationProps, RouteProps {}
