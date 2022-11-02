import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';
import { COLORS } from '../../../../../themes/colors';

export interface ITrySomethingModalStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  maxCharacters: TextStyle;
}

export const styles = StyleSheet.create<ITrySomethingModalStyles>({
  container: {
    flex: 1,
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
  },
  maxCharacters: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 8 * WINDOW_COEFFICIENT,
  },
});
