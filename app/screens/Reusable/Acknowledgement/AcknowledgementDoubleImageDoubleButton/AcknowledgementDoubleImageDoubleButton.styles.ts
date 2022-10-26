import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementDoubleImageDoubleButtonScreenStyles {
  container: ViewStyle;
  iconContainer: ViewStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageDoubleButtonScreenStyles>({
    container: {
      alignItems: 'center',
      paddingTop: 40,
      paddingHorizontal: 40,
      paddingBottom: 70,
    },
    iconContainer: {
      marginVertical: 80,
    },
    description: {
      flex: 1,
      maxHeight: 100,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    bottomButton: {
      marginVertical: 12,
      alignSelf: 'center',
    },
  });
