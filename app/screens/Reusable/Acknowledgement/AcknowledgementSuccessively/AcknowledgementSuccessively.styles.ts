import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSuccessivelyScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementSuccessivelyScreenStyles>({
    container: {
      alignItems: 'center',
      paddingTop: 34,
      paddingHorizontal: 40,
    },
    title: {
      marginTop: 43,
      marginBottom: 24,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
  });
