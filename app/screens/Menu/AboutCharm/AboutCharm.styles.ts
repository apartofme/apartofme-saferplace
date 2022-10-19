import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IAboutCharmScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IAboutCharmScreenStyles>({
  // TODO: change on correct styles
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 40,
    marginBottom: 40,
    color: COLORS.BRILLIANT_WHITE,
  },
  image: {
    alignSelf: 'center',
  },
});
