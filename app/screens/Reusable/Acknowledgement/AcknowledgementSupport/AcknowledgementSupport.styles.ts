import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAcknowledgementSupportScreenStyles>({
  container: {
    paddingVertical: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    maxWidth: 327,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    maxWidth: 295,
    paddingTop: 20 * WINDOW_COEFFICIENT,
  },
  imageContainer: {
    paddingBottom: 34 * WINDOW_COEFFICIENT,
  },
});
