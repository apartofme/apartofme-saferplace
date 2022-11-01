import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface ITroublesomeSpiritQuestionsCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  carousel: ViewStyle;
}

export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselScreenStyles>({
    container: {
      paddingTop: 40 * WINDOW_COEFFICIENT,
      paddingHorizontal: 24,
    },
    title: {
      paddingBottom: 16 * WINDOW_COEFFICIENT,
      color: COLORS.BRILLIANT_WHITE,
    },
    description: {
      marginBottom: 33 * WINDOW_COEFFICIENT,
      color: COLORS.LIGHT_GREY,
    },
    carousel: {
      maxHeight: 300,
    },
  });
