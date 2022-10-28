import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

export interface ITroublesomeSpiritQuestionsCarouselItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselItemStyles>({
    container: {
      flex: 1,
      paddingHorizontal: 64,
      paddingBottom: 48 * WINDOW_COEFFICIENT,
      justifyContent: 'flex-end',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      maxHeight: 240,
      borderRadius: 24,
      borderColor: COLORS.PRIMARY_ORANGE,
      backgroundColor: COLORS.PRIMARY_PURPLE,
    },
    title: {
      marginTop: 16 * WINDOW_COEFFICIENT,
      textAlign: 'center',
      color: COLORS.PRIMARY_ORANGE,
    },
  });
