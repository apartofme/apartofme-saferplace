import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementDoubleImageDoubleButtonScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageDoubleButtonScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40 * WINDOW_COEFFICIENT,
      paddingHorizontal: 24,
      paddingBottom: 20 * WINDOW_COEFFICIENT,
    },
    description: {
      flex: 1,
      maxHeight: 100,
      marginHorizontal: 16,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
    bottomButton: {
      marginTop: 12 * WINDOW_COEFFICIENT,
      marginBottom: 24 * WINDOW_COEFFICIENT,
      alignSelf: 'center',
    },
  });
