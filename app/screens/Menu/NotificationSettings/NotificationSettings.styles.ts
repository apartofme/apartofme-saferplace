import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface INotificationSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  button: ViewStyle;
  menuSwitchContainer: ViewStyle;
  systemSettingsContainer: ViewStyle;
}

export const styles = StyleSheet.create<INotificationSettingsStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    marginTop: 48 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 100,
  },
  subtitle: {
    marginTop: 6 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  button: {
    marginTop: 24 * WINDOW_COEFFICIENT,
  },
  menuSwitchContainer: {
    paddingBottom: 16 * WINDOW_COEFFICIENT,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  systemSettingsContainer: {
    marginBottom: -3,
  },
});
