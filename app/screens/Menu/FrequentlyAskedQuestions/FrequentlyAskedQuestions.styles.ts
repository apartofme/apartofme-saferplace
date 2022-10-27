import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFAQSectionListStyles {
  container: ViewStyle;
  title: ViewStyle;
  list: ViewStyle;
}

export const styles = StyleSheet.create<IFAQSectionListStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },
  list: {
    flex: 1,
    marginTop: 26 * WINDOW_COEFFICIENT,
  },
});
