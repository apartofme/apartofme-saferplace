import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors';

interface INotificationSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  button: ViewStyle;
  menuSwitchContainer: ViewStyle;
}

export const styles = StyleSheet.create<INotificationSettingsStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    marginTop: 48,
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 100,
  },
  subtitle: {
    marginTop: 6,
    color: COLORS.BRILLIANT_WHITE,
  },
  button: {
    marginTop: 24,
  },
  menuSwitchContainer: {
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
