import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface INotificationSettingsStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<INotificationSettingsStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    marginTop: 40,
    marginBottom: 100,
  },
});
