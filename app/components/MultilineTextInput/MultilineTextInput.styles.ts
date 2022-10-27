import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

interface IExtendedTextAreaStyles {
  inputContainer: ViewStyle;
  inputActiveContainer: ViewStyle;
  input: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextAreaStyles>({
  inputContainer: {
    flex: 1,
    borderRadius: 16,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 1,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    padding: 16,
  },
  inputActiveContainer: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 2,
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
