import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ILoginScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  mb24: TextStyle;
  forgotButton: ViewStyle;
  footer: ViewStyle;
  signupButton: ViewStyle;
}

export const styles = StyleSheet.create<ILoginScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 68,
  },
  mb24: {
    marginBottom: 24,
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
    marginLeft: 4,
  },
});
