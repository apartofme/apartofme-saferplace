import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IChangePasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IChangePasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50 * WINDOW_COEFFICIENT,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 46 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    paddingHorizontal: 40,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 24 * WINDOW_COEFFICIENT,
  },
});
