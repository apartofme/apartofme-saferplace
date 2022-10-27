import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

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
    color: COLORS.BRILLIANT_WHITE,
    paddingHorizontal: 24,
  },
  description: {
    color: COLORS.BRILLIANT_WHITE,
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
