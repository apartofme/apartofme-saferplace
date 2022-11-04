import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT, WINDOW_WIDTH } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface ICharmTimerButtonScreenStyles {
  container: ViewStyle;
  readLoudContainer: ViewStyle;
  animation: ViewStyle;
  headerContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICharmTimerButtonScreenStyles>({
  container: {
    paddingTop: 16 * WINDOW_COEFFICIENT,
    paddingBottom: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    zIndex: 10,
  },
  animation: {
    width: WINDOW_WIDTH,
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 75 - 100,
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16 * WINDOW_COEFFICIENT,
    borderRadius: 99,
  },
});
