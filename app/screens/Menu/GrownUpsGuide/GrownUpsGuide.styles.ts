import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IGrownUpsGuideScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  title: TextStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IGrownUpsGuideScreenStyles>({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 48 * WINDOW_COEFFICIENT,
    marginBottom: 68 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    marginBottom: 30 * WINDOW_COEFFICIENT,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30 * WINDOW_COEFFICIENT,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
