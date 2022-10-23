import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IWelcomeParentScreenStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  signUpButton: ViewStyle;
  whiteColor: TextStyle;
}

export const styles = StyleSheet.create<IWelcomeParentScreenStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 72,
    paddingHorizontal: 24,
  },
  imageContainer: {
    paddingVertical: 16,
  },
  signUpButton: {
    marginBottom: 24,
    marginHorizontal: 40,
  },
  whiteColor: {
    color: COLORS.BRILLIANT_WHITE,
  },
});
