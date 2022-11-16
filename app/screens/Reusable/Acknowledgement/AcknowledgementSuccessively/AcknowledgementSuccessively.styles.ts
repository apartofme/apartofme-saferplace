import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSuccessivelyScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementSuccessivelyScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 40 * WINDOW_COEFFICIENT,
      paddingHorizontal: 40,
    },
    title: {
      marginVertical: 24 * WINDOW_COEFFICIENT,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    description: {
      minHeight: 120,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
  });
