import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  carousel: ViewStyle;
  carouselItem: ViewStyle;
  bottomButton: ViewStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    paddingHorizontal: 24,
  },
  carousel: {
    paddingBottom: 41,
  },
  carouselItem: {
    paddingBottom: 48,
  },
  bottomButton: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
});
