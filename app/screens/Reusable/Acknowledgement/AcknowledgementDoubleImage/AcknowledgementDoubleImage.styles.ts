import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementDoubleImageScreenStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageScreenStyles>({
    container: {
      alignItems: 'center',
      paddingTop: 40,
      paddingHorizontal: 40,
      paddingBottom: 73,
    },
    imageContainer: {
      paddingTop: 56,
    },
    description: {
      flex: 1,
      maxHeight: 100,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
  });
