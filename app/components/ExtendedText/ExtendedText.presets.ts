import { TextStyle, StyleSheet } from 'react-native';

import { TEXTS } from '../../themes/text';

interface IExtendedTextStyles {
  ['large-title']: TextStyle;
  ['title']: TextStyle;
  ['heading']: TextStyle;
  ['body-regular']: TextStyle;
  ['body-bold']: TextStyle;
  ['secondary-text']: TextStyle;
  ['tertiary-text-regular']: TextStyle;
  ['tertiary-text-medium']: TextStyle;
}

export type ExtendedTextPresets = keyof IExtendedTextStyles;

export default StyleSheet.create<IExtendedTextStyles>({
  ['large-title']: TEXTS.LARGE_TITLE,
  ['title']: TEXTS.TITLE,
  ['heading']: TEXTS.HEADING,
  ['body-regular']: TEXTS.BODY_REGULAR,
  ['body-bold']: TEXTS.BODY_BOLD,
  ['secondary-text']: TEXTS.SECONDARY_TEXT,
  ['tertiary-text-regular']: TEXTS.TERTIARY_TEXT_REGULAR,
  ['tertiary-text-medium']: TEXTS.TERTIARY_TEXT_MEDIUM,
});
