import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementAlongEdgesStyles {
  container: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementAlongEdgesStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 50 * WINDOW_COEFFICIENT,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    flex: 1,
    maxHeight: 100,
    marginTop: 58 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
