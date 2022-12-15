import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface ISelectSoundScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  startButtonContainer: ViewStyle;
  titleContainer: ViewStyle;
}

export const styles = StyleSheet.create<ISelectSoundScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 54 * WINDOW_COEFFICIENT,
  },
  startButtonContainer: {
    marginHorizontal: 25,
  },
  titleContainer: {
    paddingVertical: 48 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
});
