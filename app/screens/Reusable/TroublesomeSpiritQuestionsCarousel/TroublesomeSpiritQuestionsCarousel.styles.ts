import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ITroublesomeSpiritQuestionsCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselScreenStyles>({
    container: {
      paddingTop: 40,
    },
    title: {
      paddingHorizontal: 24,
      paddingBottom: 16,
      color: COLORS.BRILLIANT_WHITE,
    },
    description: {
      paddingHorizontal: 24,
      color: COLORS.LIGHT_GREY,
    },
  });
