import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ILoginScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  mb16: TextStyle;
  forgotButton: ViewStyle;
  footer: ViewStyle;
  signupButton: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<ILoginScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingBottom: 68,
  },
  mb16: {
    marginBottom: 16,
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
    marginTop: 30,
    marginBottom: 36,
  },
});
