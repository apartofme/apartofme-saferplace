import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
  },
  title: {
    marginTop: 47,
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
});
