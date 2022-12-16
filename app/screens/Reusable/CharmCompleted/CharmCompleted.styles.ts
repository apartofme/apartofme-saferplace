import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface ICharmCompletedScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ICharmCompletedScreenStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 73 * WINDOW_COEFFICIENT,
  },
  title: {
    marginTop: 32 * WINDOW_COEFFICIENT,
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    maxHeight: 140,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
