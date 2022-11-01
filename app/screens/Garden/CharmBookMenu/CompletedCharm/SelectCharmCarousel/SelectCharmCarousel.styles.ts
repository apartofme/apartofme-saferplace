import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';

interface ISelectCharmCarouselScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
}

export const styles = StyleSheet.create<ISelectCharmCarouselScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  carousel: {
    paddingTop: 64 * WINDOW_COEFFICIENT,
    paddingBottom: 75 * WINDOW_COEFFICIENT,
  },
});
