import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

export interface IOnlyImageStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    height: 270 * WINDOW_COEFFICIENT,
    width: 247,
    borderRadius: 24,
    paddingHorizontal: 24 * WINDOW_COEFFICIENT,
    paddingVertical: 24 * WINDOW_COEFFICIENT,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
    alignItems: 'center',
  },
  title: {
    marginVertical: 16 * WINDOW_COEFFICIENT,
    color: COLORS.PRIMARY_ORANGE,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.LIGHT_ORANGE,
    textAlign: 'center',
  },
});
