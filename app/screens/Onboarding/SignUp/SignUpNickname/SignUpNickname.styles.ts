import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ISignUpNicknameStyles {
  container: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ISignUpNicknameStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 48,
  },
});
