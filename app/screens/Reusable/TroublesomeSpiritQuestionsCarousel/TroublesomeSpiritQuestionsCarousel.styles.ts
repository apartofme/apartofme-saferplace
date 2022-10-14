import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITroublesomeSpiritQuestionsCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselScreenStyles>({
    container: {
      paddingTop: 40,
    },
    title: {
      paddingHorizontal: 24,
      paddingBottom: 16,
    },
    description: {
      paddingHorizontal: 24,
    },
  });
