import { StyleSheet, ViewStyle } from 'react-native';

interface IEditProfileScreenStyles {
  inputContainer: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IEditProfileScreenStyles>({
  inputContainer: {
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 40,
  },
});
