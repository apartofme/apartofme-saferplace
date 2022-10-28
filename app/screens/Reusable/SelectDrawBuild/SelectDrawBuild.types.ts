import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { SvgComponentType } from '../../../utils/types';
import { SelectDrawBuildType } from './SelectDrawBuild.data';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SelectDrawBuild'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectDrawBuild'>;

export interface ISelectDrawBuildScreenProps
  extends NavigationProps,
    RouteProps {}

export interface ISelectDrawBuildListItem {
  id: SelectDrawBuildType;
  titleKey: string;
  descriptionKey: string;
  image: SvgComponentType;
}
