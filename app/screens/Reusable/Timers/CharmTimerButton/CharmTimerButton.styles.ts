import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT, WINDOW_WIDTH } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface ICharmTimerButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  readLoudContainer: ViewStyle;
  animation: ViewStyle;
  headerContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICharmTimerButtonScreenStyles>({
  container: {
    paddingTop: 16 * WINDOW_COEFFICIENT,
    paddingBottom: 20 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    flex: 1,
    maxHeight: 140,
  },
  headerContainer: {
    zIndex: 10,
  },
  animation: {
    width: WINDOW_WIDTH * WINDOW_COEFFICIENT - 40,
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 80 - 40,
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16 * WINDOW_COEFFICIENT,
    borderRadius: 99,
  },
});
