import { StyleSheet, ViewStyle } from 'react-native';

export interface ITroublesomeSpiritQuestionsCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselStyles>({
    container: {
      flex: 1,
      paddingBottom: 101,
    },
    progressBar: {
      alignItems: 'center',
    },
  });
