import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { IRadioButtonListItem } from '../../../components';
import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SelectPlayer'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectPlayer'>;

export interface ISelectPlayerScreenProps extends NavigationProps, RouteProps {}

export interface ISelectPlayerRoute {
  titleKey: string;
  radioButtonList: ReadonlyArray<IRadioButtonListItem>;
  onSubmit: () => void;
}
