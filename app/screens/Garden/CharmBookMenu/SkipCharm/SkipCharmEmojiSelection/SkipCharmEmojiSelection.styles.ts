import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';
import { COLORS } from '../../../../../themes/colors';

interface ISkipCharmEmojiSelectionStyles {
  topContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ISkipCharmEmojiSelectionStyles>({
  topContainer: {
    zIndex: 10,
    paddingLeft: 16,
  },
  title: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
