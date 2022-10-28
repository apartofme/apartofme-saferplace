import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { WINDOW_COEFFICIENT } from '../../../constants/window';

import { COLORS } from '../../../themes/colors';

export interface ITrySomethingNewCarouselStyles {
  container: ViewStyle;
  buttonsConainer: ViewStyle;
  titleContainer: ViewStyle;
  subtitle: TextStyle;
  selectButton: ViewStyle;
  modal: ViewStyle;
}

export const styles = StyleSheet.create<ITrySomethingNewCarouselStyles>({
  container: {
    flex: 1,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
    justifyContent: 'space-between',
  },
  buttonsConainer: {
    marginTop: 50 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  titleContainer: {
    paddingHorizontal: 24,
    marginTop: 48 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    marginBottom: 36 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
  },
  selectButton: {
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});
