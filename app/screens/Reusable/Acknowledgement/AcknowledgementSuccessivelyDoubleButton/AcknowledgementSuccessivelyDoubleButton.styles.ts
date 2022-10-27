import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
      paddingBottom: 30,
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
    bottomButton: {
      alignSelf: 'center',
      marginVertical: 10,
      color: COLORS.BRILLIANT_WHITE,
    },
  });
