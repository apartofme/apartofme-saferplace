import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface INadiyaEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  carousel: ViewStyle;
  carouselItem: ViewStyle;
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
  carousel: {
    paddingBottom: 73,
  },
  carouselItem: {
    paddingBottom: 72,
  },
});
