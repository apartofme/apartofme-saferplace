import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'RadioButton'>;
type RouteProps = StackScreenProps<MergedStackParams, 'RadioButton'>;

export interface IRadioButtonScreenProps extends NavigationProps, RouteProps {}

export interface IRadioButtonRoute {
  title: string;
  isTitleHaveNickname: boolean;
}
