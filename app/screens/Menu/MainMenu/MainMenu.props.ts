import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'MainMenu'>;
type RouteProps = StackScreenProps<MergedStackParams, 'MainMenu'>;

export interface IMainMenuScreenProps extends NavigationProps, RouteProps {}
