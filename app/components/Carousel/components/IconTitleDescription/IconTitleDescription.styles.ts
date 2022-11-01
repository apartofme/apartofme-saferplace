import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IIconTitleDescriptionStyles {
  container: ViewStyle;

  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IIconTitleDescriptionStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 40 * WINDOW_COEFFICIENT,
    paddingBottom: 55 * WINDOW_COEFFICIENT,
  },

  title: {
    paddingBottom: 24 * WINDOW_COEFFICIENT,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    minHeight: 100 * WINDOW_COEFFICIENT,
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
  },
});
