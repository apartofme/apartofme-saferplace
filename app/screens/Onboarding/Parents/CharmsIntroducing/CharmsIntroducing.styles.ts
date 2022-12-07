import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';

interface ICharmsIntroducingScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
  backArrowContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICharmsIntroducingScreenStyles>({
  container: {
    paddingBottom: 50,
  },
  carousel: {
    justifyContent: 'flex-end',
  },
  backArrowContainer: {
    position: 'absolute',
    top: 70 * WINDOW_COEFFICIENT,
    left: 15,
    zIndex: 10,
  },
});
