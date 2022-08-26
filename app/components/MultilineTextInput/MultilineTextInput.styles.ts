import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IExtendedTextAreaStyles {
  inputContainer: ViewStyle;
  input: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextAreaStyles>({
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
