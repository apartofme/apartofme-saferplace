import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IExtendedTextAreaStyles {
  inputContainer: ViewStyle;
  input: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextAreaStyles>({
  inputContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    //* Fix andriod paddings
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
