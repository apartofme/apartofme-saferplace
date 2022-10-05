import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IJournelSupportScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  inputContainer: ViewStyle;
  infoImage: ImageStyle;
}

export const styles = StyleSheet.create<IJournelSupportScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  description: {
    paddingTop: 16,
    paddingBottom: 56,
  },
  inputContainer: {
    marginTop: 48,
    height: 160,
  },
  infoImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 18,
    backgroundColor: COLORS.BLACK,
  },
});
