import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementNicknamesScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementNicknamesScreenStyles>({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 60 * WINDOW_COEFFICIENT,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingTop: 50 * WINDOW_COEFFICIENT,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
    textAlign: 'center',
  },
  description: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
