import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IExtendedTextAreaStyles {
  inputContainer: ViewStyle;
  input: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextAreaStyles>({
  inputContainer: {
    flex: 1,
    borderRadius: 16,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 1,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    padding: 16,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    color: COLORS.BRILLIANT_WHITE,
    //* Fix andriod paddings
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
