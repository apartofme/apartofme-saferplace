import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface INotificationSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
  menuSwitchContainer: ViewStyle;
}

export const styles = StyleSheet.create<INotificationSettingsStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    marginTop: 48,
    marginBottom: 100,
  },
  menuSwitchContainer: {
    marginBottom: 28,
  },
});
