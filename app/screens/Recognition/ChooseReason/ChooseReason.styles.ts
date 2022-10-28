import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IChooseReasonScreenStyles {
  container: ViewStyle;
  subtitle: TextStyle;
  submitButton: ViewStyle;
  skipTitle: TextStyle;
}

export const styles = StyleSheet.create<IChooseReasonScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 40 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    marginBottom: 36 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  submitButton: {
    marginBottom: 28 * WINDOW_COEFFICIENT,
  },
  skipTitle: {
    alignSelf: 'center',
    color: COLORS.BRILLIANT_WHITE,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
  },
});
