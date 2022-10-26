import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
      paddingBottom: 60,
      paddingHorizontal: 40,
    },
    title: {
      marginTop: 43,
      marginBottom: 24,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    description: {
      flex: 1,
      maxHeight: 120,
      color: COLORS.LIGHT_GREY,
      textAlign: 'center',
    },
  });
