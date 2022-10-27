import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ITroublesomeSpiritQuestionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  cardContainer: ViewStyle;
  card: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ITroublesomeSpiritQuestionScreenStyles>(
  {
    container: {
      paddingTop: 40,
    },
    title: {
      paddingHorizontal: 24,
      paddingBottom: 80,
      color: COLORS.BRILLIANT_WHITE,
      textAlign: 'center',
    },
    cardContainer: {
      flex: 1,
      paddingHorizontal: 64,
    },
    card: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      maxHeight: 240,
      paddingHorizontal: 24,
      backgroundColor: COLORS.PRIMARY_PURPLE,
      borderRadius: 24,
      borderColor: COLORS.PRIMARY_ORANGE,
      borderWidth: 2,
    },
    subtitle: {
      textAlign: 'center',
      color: COLORS.PRIMARY_ORANGE,
      marginTop: 16,
    },
  },
);
