import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    marginTop: 48,
    marginBottom: 100,
  },
  menuSwitchContainer: {
    marginBottom: 28,
  },
});
