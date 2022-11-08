import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import {
  WINDOW_COEFFICIENT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../../constants/window';
import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface IAnimationTitleStyles {
  container: ViewStyle;
  waitContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAnimationTitleStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  waitContainer: {
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    backgroundColor: hexTransparency(COLORS.BLACK, 75),
  },
  title: {
    paddingHorizontal: 24,
    marginBottom: 175 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
