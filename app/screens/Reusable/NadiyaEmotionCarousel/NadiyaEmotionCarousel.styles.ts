import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface INadiyaEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<INadiyaEmotionCarouselScreenStyles>({
  container: {
    paddingTop: 40,
  },
  title: {
    paddingHorizontal: 24,
  },
  description: {
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 72,
  },
});
