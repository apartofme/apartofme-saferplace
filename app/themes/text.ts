import { TextStyle } from 'react-native';

import { FONTS } from '../assets';

export const TEXTS = {
  LARGE_TITLE: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.34,
  } as TextStyle,
  TITLE: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 0.37,
  } as TextStyle,
  HEADING: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 0.34,
  } as TextStyle,

  BODY_REGULAR: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.37,
  } as TextStyle,
  BODY_BOLD: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.37,
  } as TextStyle,
  SECONDARY_TEXT: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.44,
  } as TextStyle,

  TERTIARY_TEXT_REGULAR: {
    fontFamily: FONTS.POPPINS_REGULAR,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.54,
  } as TextStyle,
  TERTIARY_TEXT_MEDIUM: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.75,
  } as TextStyle,
};
