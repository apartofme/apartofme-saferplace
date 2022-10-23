import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IElixirDoubleInteractionSubtitleStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  square: ViewStyle;
  redBackground: ViewStyle;
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
      paddingHorizontal: 60,
      paddingBottom: 24,
    },
    // TODO: change to cerrect styles
    button: {
      height: 80,
      width: 80,
      borderRadius: 99,
      backgroundColor: COLORS.PRIMARY,
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
    // TODO: remove when add animation
    square: {
      backgroundColor: 'gray',
      height: 200,
      width: 200,
      alignSelf: 'center',
    },
    redBackground: {
      backgroundColor: 'red',
    },
  },
);
