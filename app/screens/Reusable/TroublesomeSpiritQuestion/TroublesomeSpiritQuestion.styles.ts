import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITroublesomeSpiritQuestionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  cardContainer: ViewStyle;
  card: ViewStyle;
  description: TextStyle;
}

// TODO: change to correct styles
export const styles = StyleSheet.create<ITroublesomeSpiritQuestionScreenStyles>(
  {
    container: {
      paddingTop: 40,
    },
    title: {
      paddingHorizontal: 24,
      paddingBottom: 80,
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
      backgroundColor: '#1A1A1A',
      borderRadius: 24,
    },
    description: {
      textAlign: 'center',
      color: '#FFFFFF',
    },
  },
);
