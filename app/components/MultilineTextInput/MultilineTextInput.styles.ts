import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IExtendedTextAreaStyles {
  inputContainer: ViewStyle;
  input: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextAreaStyles>({
  // TODO: change for correct styles
  inputContainer: {
    flex: 1,
    backgroundColor: 'gray',
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
