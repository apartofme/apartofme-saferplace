import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ISignUpNicknameStyles {
  container: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ISignUpNicknameStyles>({
  container: {
    paddingHorizontal: 24,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 40,
  },
});
