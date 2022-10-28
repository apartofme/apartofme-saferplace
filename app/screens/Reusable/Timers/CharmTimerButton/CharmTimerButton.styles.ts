import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface ICharmTimerButtonScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  readLoudContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICharmTimerButtonScreenStyles>({
  container: {
    paddingTop: 16 * WINDOW_COEFFICIENT,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  timer: {
    paddingVertical: 86 * WINDOW_COEFFICIENT,
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16 * WINDOW_COEFFICIENT,
    borderRadius: 99,
  },
});
