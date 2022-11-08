import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

export interface IIconDescriptionStyles {
  container: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IIconDescriptionStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40 * WINDOW_COEFFICIENT,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subtitle: {
    flex: 1,
    maxHeight: 100,
    marginTop: 40 * WINDOW_COEFFICIENT,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
});
