import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFeedbackSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFeedbackSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50 * WINDOW_COEFFICIENT,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 27 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 24 * WINDOW_COEFFICIENT,
  },
});
