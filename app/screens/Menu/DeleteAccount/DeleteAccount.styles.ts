import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IDeleteAccountStyles {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  subtitle: TextStyle;
  buttonContainer: ViewStyle;
  forgotPassword: TextStyle;
  displayNone: ViewStyle;
}

export const styles = StyleSheet.create<IDeleteAccountStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    marginBottom: 46 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  inputContainer: {
    marginTop: 19 * WINDOW_COEFFICIENT,
  },
  input: {
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginBottom: 36 * WINDOW_COEFFICIENT,
  },
  forgotPassword: {
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  displayNone: {
    display: 'none',
  },
});
