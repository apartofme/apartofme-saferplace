import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ButtonsMenu'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ButtonsMenu'>;

export interface IButtonsMenuScreenProps extends NavigationProps, RouteProps {}
