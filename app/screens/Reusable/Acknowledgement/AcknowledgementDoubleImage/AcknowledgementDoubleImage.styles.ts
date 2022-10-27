import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementDoubleImageScreenStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingHorizontal: 40,
      paddingBottom: 50,
    },
    iconContainer: {},
    description: {
      flex: 1,
      maxHeight: 120,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
  });
