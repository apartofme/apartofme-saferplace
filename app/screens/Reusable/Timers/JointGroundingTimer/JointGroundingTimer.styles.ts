import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT, WINDOW_WIDTH } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IGroundingTimerScreenStyles {
  container: ViewStyle;
  animation: TextStyle;
  seconds: ViewStyle;
}

export const styles = StyleSheet.create<IGroundingTimerScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  animation: {
    width: WINDOW_WIDTH,
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 75 - 100,
  },
  seconds: {
    paddingVertical: 74,
    color: COLORS.PRIMARY_ORANGE,
  },
});
