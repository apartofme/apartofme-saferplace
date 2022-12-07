import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IEmotionSelectionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmotionSelectionScreenStyles>({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    paddingBottom: 36 * WINDOW_COEFFICIENT,
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
});
