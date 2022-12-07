import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';

interface IOnboardingCarouselScreenStyles {
  backArrowContainer: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  backArrowContainer: {
    position: 'absolute',
    top: 70 * WINDOW_COEFFICIENT,
    left: 15,
    zIndex: 10,
  },
  button: {
    marginVertical: 24 * WINDOW_COEFFICIENT,
    marginHorizontal: 40,
  },
});
