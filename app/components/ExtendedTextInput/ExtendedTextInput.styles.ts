import { StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';
import { hexTransparency, isIOS } from '../../utils';

interface IExtendedTextInputStyles {
  label: TextStyle;
  input: TextStyle;
  error: TextStyle;
}

export const styles = StyleSheet.create<IExtendedTextInputStyles>({
  label: {},
  input: {
    paddingHorizontal: 24,
    paddingVertical: isIOS ? 20 : 16,
    backgroundColor: hexTransparency(COLORS.DARK_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 24,
    color: COLORS.BRILLIANT_WHITE,
  },
  error: {},
});
