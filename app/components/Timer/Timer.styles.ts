import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../constants/window';

interface ITimerScreenStyles {
  circle: ViewStyle;
}

export const styles = StyleSheet.create<ITimerScreenStyles>({
  circle: {
    width: 174 * WINDOW_COEFFICIENT,
    height: 174 * WINDOW_COEFFICIENT,
    borderRadius: 100,
    backgroundColor: '#AA82E0',
    opacity: 0.59,
  },
});
