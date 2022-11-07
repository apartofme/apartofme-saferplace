import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT, WINDOW_WIDTH } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface ITimerTitleButtonScreenStyles {
  container: ViewStyle;
  animation: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ITimerTitleButtonScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 24 * WINDOW_COEFFICIENT,
  },
  animation: {
    width: WINDOW_WIDTH,
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 75 - 100,
  },
  title: {
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    maxHeight: 80,
    marginBottom: 66 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
