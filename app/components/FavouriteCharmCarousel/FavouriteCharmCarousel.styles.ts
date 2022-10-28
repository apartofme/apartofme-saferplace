import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../constants/window';

export interface IFavouriteCharmCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselStyles>({
  container: {
    flex: 1,
    paddingBottom: 73 * WINDOW_COEFFICIENT,
  },
  progressBar: {
    marginBottom: 30 * WINDOW_COEFFICIENT,
    alignItems: 'center',
  },
});
