import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface INadiyaEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  carousel: ViewStyle;
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<INadiyaEmotionCarouselScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingHorizontal: 24,
  },
  description: {
    color: COLORS.BRILLIANT_WHITE,
    paddingTop: 16 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    paddingBottom: 72 * WINDOW_COEFFICIENT,
  },
  carousel: {
    paddingBottom: 73 * WINDOW_COEFFICIENT,
  },
  carouselItem: {
    paddingBottom: 72 * WINDOW_COEFFICIENT,
  },
});
