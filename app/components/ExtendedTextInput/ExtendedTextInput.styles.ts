import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';
import { hexTransparency, isIOS } from '../../utils';

interface IExtendedTextInputStyles {
  label: TextStyle;
  input: TextStyle;
  inputActive: TextStyle;
  errorContainer: ViewStyle;
  error: TextStyle;
  inputError: ViewStyle;
}

export const styles = StyleSheet.create<IExtendedTextInputStyles>({
  label: {},
  input: {
    paddingHorizontal: 24,
    paddingVertical: isIOS ? 20 : 16,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 24,
    color: COLORS.BRILLIANT_WHITE,
  },
  inputActive: {
    borderWidth: 2,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.RED,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  error: {
    color: COLORS.BRILLIANT_WHITE,
    marginLeft: 11,
    maxWidth: 276,
  },
  inputError: {
    borderColor: COLORS.RED,
  },
});
