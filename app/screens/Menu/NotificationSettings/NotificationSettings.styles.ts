import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../../themes/colors';

interface INotificationSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
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
  button: {
    marginTop: 24,
  },
});
