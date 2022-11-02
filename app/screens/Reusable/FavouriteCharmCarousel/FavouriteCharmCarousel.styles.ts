import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFavouriteCharmCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  carousel: ViewStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 67 * WINDOW_COEFFICIENT,
  },
  carousel: {
    maxHeight: 300,
  },
});
