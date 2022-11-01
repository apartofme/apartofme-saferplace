import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISelectUserAcknowledgementScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ISelectUserAcknowledgementScreenStyles>(
  {
    container: {
      flex: 1,
      paddingTop: 40,
      paddingBottom: 15,
      alignItems: 'center',
    },
    title: {
      color: COLORS.BRILLIANT_WHITE,
      marginTop: 43,
      marginBottom: 24,
      maxWidth: 295,
      textAlign: 'center',
    },
    subtitle: {
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
      maxWidth: 295,
    },
  },
);
