import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IChangePasswordScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  mt4: ViewStyle;
  mt16: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IChangePasswordScreenStyles>({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
  },
  mt4: {
    marginTop: 4,
  },
  mt16: {
    marginTop: 16 * WINDOW_COEFFICIENT,
  },
});
