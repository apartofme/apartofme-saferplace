import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IFavouriteCharmCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselScreenStyles>({
  container: {
    paddingTop: 40,
  },
  title: {
    paddingHorizontal: 24,
    color: COLORS.BRILLIANT_WHITE,
  },
});
