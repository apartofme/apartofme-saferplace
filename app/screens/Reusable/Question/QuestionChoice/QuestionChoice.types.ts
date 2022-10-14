import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'QuestionChoice'>;
type RouteProps = StackScreenProps<MergedStackParams, 'QuestionChoice'>;

export interface IQuestionChoiceScreenProps
  extends NavigationProps,
    RouteProps {}
