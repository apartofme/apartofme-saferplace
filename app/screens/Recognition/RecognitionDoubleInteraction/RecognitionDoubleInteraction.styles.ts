import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IElixirDoubleInteractionSubtitleStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IElixirDoubleInteractionSubtitleStyles>(
  {
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 44,
      paddingBottom: 24,
    },
    title: {
      textAlign: 'center',
      marginTop: 70,
      color: COLORS.BRILLIANT_WHITE,
    },
    subtitle: {
      textAlign: 'center',
      marginBottom: 40,
      maxWidth: 295,
      marginTop: 40,
      marginHorizontal: 40,
      color: COLORS.BRILLIANT_WHITE,
    },
  },
);
