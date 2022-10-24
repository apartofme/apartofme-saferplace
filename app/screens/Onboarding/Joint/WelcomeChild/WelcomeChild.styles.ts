import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IWelcomeChildScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IWelcomeChildScreenStyles>({
  container: {
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    marginTop: 160,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  imageContainer: {
    paddingVertical: 16,
  },
});
