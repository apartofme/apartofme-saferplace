import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'ParentsGuide'>;
type RouteProps = StackScreenProps<MergedStackParams, 'ParentsGuide'>;

export interface IParentsGuideScreenProps extends NavigationProps, RouteProps {}
