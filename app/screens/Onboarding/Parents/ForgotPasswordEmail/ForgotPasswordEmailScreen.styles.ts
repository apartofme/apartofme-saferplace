import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../../../themes/colors';

interface IForgotPasswordEmailScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IForgotPasswordEmailScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 16,
    marginBottom: 48,
  },
});
