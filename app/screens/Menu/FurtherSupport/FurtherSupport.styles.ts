import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFurtherSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFurtherSupportScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48 * WINDOW_COEFFICIENT,
  },
  list: {
    marginTop: 50 * WINDOW_COEFFICIENT,
    flex: 1,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30 * WINDOW_COEFFICIENT,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
