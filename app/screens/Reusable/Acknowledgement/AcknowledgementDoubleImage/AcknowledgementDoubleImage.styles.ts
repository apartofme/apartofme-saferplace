import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementDoubleImageScreenStyles {
  container: ViewStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40 * WINDOW_COEFFICIENT,
      paddingHorizontal: 24,
      paddingBottom: 50,
    },
    description: {
      flex: 1,
      maxHeight: 120,
      marginHorizontal: 16,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
  });
