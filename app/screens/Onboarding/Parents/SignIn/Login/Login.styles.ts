import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';
import { COLORS } from '../../../../../themes/colors';

interface ILoginScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  mt16: TextStyle;
  forgotButton: ViewStyle;
  footer: ViewStyle;
  signupButton: ViewStyle;
  button: ViewStyle;
  errorTitle: TextStyle;
  mb50: TextStyle;
}

export const styles = StyleSheet.create<ILoginScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingBottom: 16,
  },
  mb50: {
    marginBottom: 50,
  },
  mt16: {
    marginTop: 16 * WINDOW_COEFFICIENT,
  },
  forgotButton: {
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  signupButton: {
    color: COLORS.PRIMARY_ORANGE,
    marginLeft: 4,
  },
  button: {
    marginTop: 30 * WINDOW_COEFFICIENT,
    marginBottom: 36,
  },
  errorTitle: {
    color: COLORS.ERROR,
    paddingBottom: 30,
  },
});
