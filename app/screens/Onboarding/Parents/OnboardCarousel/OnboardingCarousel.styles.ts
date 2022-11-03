import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';

interface IOnboardingCarouselScreenStyles {
  button: ViewStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  button: {
    marginVertical: 24 * WINDOW_COEFFICIENT,
  },
});
