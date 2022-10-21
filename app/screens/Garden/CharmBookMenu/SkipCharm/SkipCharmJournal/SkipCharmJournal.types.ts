import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<
  MergedStackParams,
  'SkipCharmJournal'
>;
type RouteProps = StackScreenProps<MergedStackParams, 'SkipCharmJournal'>;

export interface ISkipCharmJournalScreenProps
  extends NavigationProps,
    RouteProps {}
