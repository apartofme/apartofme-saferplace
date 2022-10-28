import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementTitleScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementTitleScreenStyles>({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    marginTop: 50 * WINDOW_COEFFICIENT,
    marginBottom: 127 * WINDOW_COEFFICIENT,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
});
