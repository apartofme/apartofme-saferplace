import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

const BASE: ViewStyle = {
  backgroundColor: COLORS.BLACK,
  padding: 16,
  borderRadius: 20,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
  defaultDisabled: ViewStyle;
  defaultDisabledTitle: TextStyle;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles =
  StyleSheet.create<IExtendedButtonAdditionalStyles>({
    defaultTitle: { color: COLORS.WHITE },
    defaultDisabled: {
      backgroundColor: COLORS.WHITE,
    },
    defaultDisabledTitle: {
      color: COLORS.BLACK,
    },
  });

export default StyleSheet.create<IExtendedButtonStyles>({
  default: BASE,
});
