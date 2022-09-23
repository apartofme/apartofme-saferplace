import { StackScreenProps, StackNavigationProp } from '@react-navigation/stack';

import { MergedStackParams } from '../../../navigation/stacks/mergedParams';

type NavigationProps = StackNavigationProp<MergedStackParams, 'SelectSong'>;
type RouteProps = StackScreenProps<MergedStackParams, 'SelectSong'>;

export interface ISelectSongScreenProps extends NavigationProps, RouteProps {}
