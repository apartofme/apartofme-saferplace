import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IFurtherSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  sectionTitle: TextStyle;
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
    marginTop: 26 * WINDOW_COEFFICIENT,
    flex: 1,
  },
  sectionTitle: {
    color: COLORS.PRIMARY_ORANGE,
    marginVertical: 24 * WINDOW_COEFFICIENT,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30 * WINDOW_COEFFICIENT,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
