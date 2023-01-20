import { ViewStyle, StyleSheet, TextStyle } from 'react-native';

import { FONTS } from '../../assets';
import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

const BASE: ViewStyle = {
  paddingVertical: 16,
  paddingHorizontal: 24,
  borderRadius: 40,
};

interface IExtendedButtonStyles {
  default: ViewStyle;
  border: ViewStyle;
  destructive: ViewStyle;
}

interface IExtendedButtonAdditionalStyles {
  defaultTitle: TextStyle;
  defaultDisabled: ViewStyle;
  defaultDisabledTitle: TextStyle;

  borderTitle: TextStyle;
  borderDisabled: ViewStyle;
  borderDisabledTitle: TextStyle;

  destructiveTitle: TextStyle;
  destructiveDisabled: ViewStyle;
  destructiveDisabledTitle: TextStyle;

  activityIndicator: ViewStyle;
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
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      backgroundColor: hexTransparency(COLORS.PRIMARY_ORANGE, 50),
    },
    defaultDisabledTitle: {
      color: hexTransparency(COLORS.DARK_BROWN, 50),
    },

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

    destructiveTitle: {
      fontFamily: FONTS.POPPINS_BOLD,
      fontSize: 17,
      lineHeight: 30,
      letterSpacing: 0.34,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    destructiveDisabled: {
      backgroundColor: COLORS.ERROR,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      shadowOffset: {
        height: 0,
        width: 0,
      },
    },
    destructiveDisabledTitle: {},
    activityIndicator: {
      width: 24,
      height: 24,
    },
  });

export default StyleSheet.create<IExtendedButtonStyles>({
  default: {
    ...BASE,
    backgroundColor: COLORS.PRIMARY_ORANGE,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.LIGHT_ORANGE,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: COLORS.LIGHT_BROWN,
  },
  border: {
    ...BASE,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  destructive: {
    ...BASE,
    backgroundColor: COLORS.RED,
    borderTopWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: COLORS.ERROR,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowColor: COLORS.SANGRIA,
  },
});
