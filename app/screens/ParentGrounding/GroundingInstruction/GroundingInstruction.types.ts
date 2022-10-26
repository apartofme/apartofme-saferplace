import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { SvgComponentType } from '../../../utils/types';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'GroundingInstruction'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'GroundingInstruction'>;

export interface IInstructionScreenProps extends NavigationProps, RouteProps {}

export interface IInstructionItem {
  titleKey: string;
  image: SvgComponentType;
}
