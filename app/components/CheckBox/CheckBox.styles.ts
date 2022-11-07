import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../constants/window';
import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

export interface ICheckBoxStyles {
  container: ViewStyle;
  title: TextStyle;
  activeBackground: ViewStyle;
}

export const styles = StyleSheet.create<ICheckBoxStyles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24 * WINDOW_COEFFICIENT,
    marginBottom: 24 * WINDOW_COEFFICIENT,
    borderRadius: 24,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  title: {
    flex: 1,
    marginRight: 32 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
  },

  activeBackground: {
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 2,
  },
});
