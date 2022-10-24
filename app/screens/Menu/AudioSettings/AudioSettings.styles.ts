import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    marginTop: 48,
    marginBottom: 100,
  },
  menuSwitchContainer: {
    marginBottom: 28,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
