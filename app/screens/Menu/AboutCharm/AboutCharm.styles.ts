import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IAboutCharmScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ImageStyle;
}

export const styles = StyleSheet.create<IAboutCharmScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    marginBottom: 40,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginBottom: 40,
    color: COLORS.BRILLIANT_WHITE,
  },
  imageContainer: {
    alignSelf: 'center',
  },
});
