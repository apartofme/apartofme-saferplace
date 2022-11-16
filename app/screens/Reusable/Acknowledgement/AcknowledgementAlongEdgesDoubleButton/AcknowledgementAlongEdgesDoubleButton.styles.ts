import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementAlongEdgesDoubleButtonScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementAlongEdgesDoubleButtonScreenStyles>({
    container: {
      paddingTop: 40 * WINDOW_COEFFICIENT,
      paddingHorizontal: 24,
      paddingBottom: 10 * WINDOW_COEFFICIENT,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    description: {
      flex: 1,
      maxHeight: 100,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
    bottomButton: {
      alignSelf: 'center',
      marginTop: 12 * WINDOW_COEFFICIENT,
      marginBottom: 24 * WINDOW_COEFFICIENT,
    },
  });
