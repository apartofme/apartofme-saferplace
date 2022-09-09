import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IChangePasswordScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
}

export const styles = StyleSheet.create<IChangePasswordScreenStyles>({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    marginBottom: 24,
  },
  inputContainer: {
    marginTop: 19,
  },
  input: {
    marginBottom: 16,
  },
});
