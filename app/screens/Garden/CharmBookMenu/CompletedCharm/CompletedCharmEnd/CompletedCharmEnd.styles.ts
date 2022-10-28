import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';
import { COLORS } from '../../../../../themes/colors';

interface ICompletedCharmEndStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ICompletedCharmEndStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 40,
  },
  title: {
    paddingTop: 43 * WINDOW_COEFFICIENT,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
