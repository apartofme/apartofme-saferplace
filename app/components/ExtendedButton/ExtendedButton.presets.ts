import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

import { FONTS } from '../../assets';
import { COLORS } from '../../themes/colors';

const BASE: ViewStyle = {
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 40,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
  border: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
  defaultDisabled: ViewStyle;
  defaultDisabledTitle: TextStyle;

  borderTitle: TextStyle;
  borderDisabled: ViewStyle;
  borderDisabledTitle: TextStyle;
}

export type ExtendedButtonPresets = keyof IExtendedButtonStyles;

export const additionalStyles =
  StyleSheet.create<IExtendedButtonAdditionalStyles>({
    defaultTitle: {
      fontFamily: FONTS.POPPINS_BOLD,
      fontSize: 17,
      lineHeight: 30,
      letterSpacing: 0.34,
      color: COLORS.DARK_BROWN,
      textAlign: 'center',
    },
    defaultDisabled: {
      opacity: 0.5,
    },
    defaultDisabledTitle: {},

    borderTitle: {
      fontFamily: FONTS.POPPINS_MEDIUM,
      fontSize: 17,
      lineHeight: 30,
      letterSpacing: 0.34,
      color: COLORS.PRIMARY_ORANGE,
      textAlign: 'center',
    },
    borderDisabled: {},
    borderDisabledTitle: {},
  });

export default StyleSheet.create<IExtendedButtonStyles>({
  default: {
    ...BASE,
    backgroundColor: COLORS.PRIMARY_ORANGE,
  },
  border: {
    ...BASE,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
});
