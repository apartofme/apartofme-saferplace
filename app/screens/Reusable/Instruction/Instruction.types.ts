import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Instruction'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Instruction'>;

export interface IInstructionScreenProps extends NavigationProps, RouteProps {}

export interface IInstructionRoute {
  titleKey: string;
  buttonTitleKey: string;
  onSubmit: () => void;
}

export interface IInstructionListItem {
  titleKey: string;
  imageSource: ImageSourcePropType;
}
