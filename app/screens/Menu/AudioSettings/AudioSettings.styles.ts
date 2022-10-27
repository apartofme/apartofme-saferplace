import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IAudioSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
  menuSwitchContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAudioSettingsStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48 * WINDOW_COEFFICIENT,
    marginBottom: 100 * WINDOW_COEFFICIENT,
  },
  menuSwitchContainer: {
    marginBottom: 28 * WINDOW_COEFFICIENT,
    paddingBottom: 30 * WINDOW_COEFFICIENT,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
