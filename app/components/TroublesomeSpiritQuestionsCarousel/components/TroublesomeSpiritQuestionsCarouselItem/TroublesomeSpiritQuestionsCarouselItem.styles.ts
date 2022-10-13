import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface ITroublesomeSpiritQuestionsCarouselItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

// TODO: change to correct styles
export const styles =
  StyleSheet.create<ITroublesomeSpiritQuestionsCarouselItemStyles>({
    container: {
      flex: 1,
      paddingHorizontal: 64,
      paddingBottom: 24,
      justifyContent: 'flex-end',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 24,
      maxHeight: 240,
      borderRadius: 24,
    },
    title: {
      textAlign: 'center',
      color: '#FFFFFF',
    },
  });
