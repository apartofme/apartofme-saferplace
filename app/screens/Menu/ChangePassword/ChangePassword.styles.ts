import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IChangePasswordScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IChangePasswordScreenStyles>({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
  },
  inputContainer: {
    marginTop: 19 * WINDOW_COEFFICIENT,
  },
  input: {
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
});
