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
      paddingTop: 40,
      paddingHorizontal: 24,
      paddingBottom: 20 * WINDOW_COEFFICIENT,
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
      marginVertical: 12,
    },
  });
