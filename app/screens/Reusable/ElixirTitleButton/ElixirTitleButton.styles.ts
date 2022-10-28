import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IElixirTitleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IElixirTitleButtonScreenStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 77 * WINDOW_COEFFICIENT,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
});
