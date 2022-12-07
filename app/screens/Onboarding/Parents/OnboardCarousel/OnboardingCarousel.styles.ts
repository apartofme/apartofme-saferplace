import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IOnboardingCarouselScreenStyles {
  container: ViewStyle;
  backArrowContainer: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowContainer: {
    position: 'absolute',
    top: 70 * WINDOW_COEFFICIENT,
    left: 15,
    zIndex: 10,
  },
  button: {
    marginBottom: 24 * WINDOW_COEFFICIENT,
    marginHorizontal: 40,
  },
  title: {
    marginTop: 400 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  subtitle: {
    marginVertical: 24 * WINDOW_COEFFICIENT,
    maxWidth: 295,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
