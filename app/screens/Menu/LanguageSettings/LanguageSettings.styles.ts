import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IHomeScreenStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  buttonContainer: ViewStyle;
  cancelButton: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  listContainer: {
    flex: 1,
    marginTop: 42 * WINDOW_COEFFICIENT,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 24 * WINDOW_COEFFICIENT,
  },
  buttonContainer: {
    paddingHorizontal: 41,
  },
  cancelButton: {
    marginTop: 23 * WINDOW_COEFFICIENT,
    marginBottom: 40 * WINDOW_COEFFICIENT,
  },
});
