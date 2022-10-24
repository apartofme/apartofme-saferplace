import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../themes/colors';

export interface IGeneralStyles {
  flex: ViewStyle;
  whFlex: ViewStyle;

  jcCenter: ViewStyle;
  jcEnd: ViewStyle;
  jcSpaceBtw: ViewStyle;

  aiCenter: ViewStyle;
  aiEnd: ViewStyle;

  asCenter: ViewStyle;

  centered: ViewStyle;

  row: ViewStyle;

  boldText: TextStyle;
  primaryOrange: TextStyle;
  brilliantWhite: TextStyle;
  grey: TextStyle;
  primaryOrangeCenter: TextStyle;
  brilliantWhiteCenter: TextStyle;
  greyCenter: TextStyle;
}

export const generalStyles = StyleSheet.create<IGeneralStyles>({
  flex: {
    flex: 1,
  },
  whFlex: {
    flex: 1,
    backgroundColor: COLORS.BRILLIANT_WHITE,
  },

  jcCenter: {
    justifyContent: 'center',
  },
  jcEnd: {
    justifyContent: 'flex-end',
  },
  jcSpaceBtw: {
    justifyContent: 'space-between',
  },

  aiCenter: {
    alignItems: 'center',
  },
  aiEnd: {
    alignItems: 'flex-end',
  },

  asCenter: {
    alignSelf: 'center',
  },

  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  row: {
    flexDirection: 'row',
  },

  boldText: {
    fontWeight: '700',
  },
  primaryOrange: {
    color: COLORS.PRIMARY_ORANGE,
  },
  brilliantWhite: {
    color: COLORS.BRILLIANT_WHITE,
  },
  grey: {
    color: COLORS.LIGHT_GREY,
  },
  primaryOrangeCenter: {
    color: COLORS.PRIMARY_ORANGE,
    textAlign: 'center',
  },
  brilliantWhiteCenter: {
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  greyCenter: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
