import { StyleSheet, ViewStyle } from 'react-native';

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
    marginTop: 16,
    marginBottom: 48,
  },
});
