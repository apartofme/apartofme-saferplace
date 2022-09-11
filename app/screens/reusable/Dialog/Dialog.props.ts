import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';
import { ISpeech } from '../../../utils/types';

type NavigationProps = StackNavigationProp<MergedStackParams, 'Dialog'>;
type RouteProps = StackScreenProps<MergedStackParams, 'Dialog'>;

export interface IDialogScreenProps extends NavigationProps, RouteProps {}

export interface IDialogRoute {
  speechs: ISpeech[];
  backgroundImage: ImageSourcePropType;
  onSubmit: () => void;
}
