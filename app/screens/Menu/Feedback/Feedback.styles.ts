import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFeedbackScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFeedbackScreenStyles>({
  container: {
    marginHorizontal: 24,
  },
  title: {
    marginTop: 48 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 27 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
  },
  inputContainer: {
    marginTop: 30 * WINDOW_COEFFICIENT,
    height: 160,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
});
