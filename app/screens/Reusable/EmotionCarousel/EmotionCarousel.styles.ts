import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  carouselContainer: ViewStyle;
  carousel: ViewStyle;
  bottomButton: ViewStyle;
  modal: ViewStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40 * WINDOW_COEFFICIENT,
  },
  title: {
    paddingHorizontal: 24,
    paddingBottom: 48 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  carouselContainer: {
    paddingBottom: 24,
  },
  carousel: {
    paddingBottom: 10 * WINDOW_COEFFICIENT,
    maxHeight: 300,
  },
  bottomButton: {
    marginHorizontal: 40,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});
