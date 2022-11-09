import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IAboutCharmScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAboutCharmScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  title: {
    marginTop: 38 * WINDOW_COEFFICIENT,
    marginBottom: 40 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginBottom: 40 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
  },
  imageContainer: {
    alignSelf: 'center',
    marginBottom: 24,
  },
});
