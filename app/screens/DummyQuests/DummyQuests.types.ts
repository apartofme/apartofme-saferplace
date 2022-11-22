import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'DummyQuests'>;
type RouteProps = StackScreenProps<MergedStackParams, 'DummyQuests'>;

export interface IDummyQuestsScreenProps extends NavigationProps, RouteProps {}
