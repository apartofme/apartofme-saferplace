import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSuccessivelyDoubleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementSuccessivelyDoubleButtonScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 30 * WINDOW_COEFFICIENT,
      paddingHorizontal: 40,
    },
    title: {
      marginTop: 30 * WINDOW_COEFFICIENT,
      marginBottom: 24 * WINDOW_COEFFICIENT,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    description: {
      flex: 1,
      maxHeight: 120,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
    bottomButton: {
      alignSelf: 'center',
      marginTop: 12 * WINDOW_COEFFICIENT,
      marginBottom: 16 * WINDOW_COEFFICIENT,
      color: COLORS.BRILLIANT_WHITE,
    },
  });
