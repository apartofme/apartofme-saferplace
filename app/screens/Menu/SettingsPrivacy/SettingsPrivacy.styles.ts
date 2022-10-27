import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface ISettingsPrivacyScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<ISettingsPrivacyScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 48 * WINDOW_COEFFICIENT,
  },
  list: {
    marginTop: 48 * WINDOW_COEFFICIENT,
    flex: 1,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30 * WINDOW_COEFFICIENT,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
