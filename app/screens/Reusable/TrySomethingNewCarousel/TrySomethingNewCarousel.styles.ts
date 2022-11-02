import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

export interface ITrySomethingNewCarouselStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  carousel: ViewStyle;
  bottomButton: ViewStyle;
  modal: ViewStyle;
}

export const styles = StyleSheet.create<ITrySomethingNewCarouselStyles>({
  container: {
    flex: 1,
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    marginBottom: 36 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
  },
  carousel: {
    maxHeight: 305 * WINDOW_COEFFICIENT,
  },
  bottomButton: {
    marginHorizontal: 40,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});
