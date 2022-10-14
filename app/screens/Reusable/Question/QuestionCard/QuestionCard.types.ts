import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';
import { Nullable } from '../../../../utils';

type NavigationProps = StackNavigationProp<MergedStackParams, 'QuestionCard'>;
type RouteProps = StackScreenProps<MergedStackParams, 'QuestionCard'>;

export interface IQuestionCardScreenProps extends NavigationProps, RouteProps {}

export interface IQuestionCardRoute {
  positiveNavigatesTo: Nullable<string>;
  negativeNavigatesTo: Nullable<string>;
}
