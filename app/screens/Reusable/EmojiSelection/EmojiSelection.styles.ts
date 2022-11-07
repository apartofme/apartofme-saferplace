import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IEmojiSelectionScreenStyles {
  title: TextStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiSelectionScreenStyles>({
  title: {
    paddingHorizontal: 24,
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  container: {
    zIndex: 10,
  },
});
