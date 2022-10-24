import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IForgotPasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IForgotPasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingBottom: 30,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 56,
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
