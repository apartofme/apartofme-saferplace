import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IAboutUsScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IAboutUsScreenStyles>({
  container: {
    marginHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 39 * WINDOW_COEFFICIENT,
  },
});
