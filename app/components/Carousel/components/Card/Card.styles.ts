import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface ICardStyles {
  contentContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ICardStyles>({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 64,
    paddingVertical: 50 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  title: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    color: COLORS.PRIMARY_ORANGE,
    textAlign: 'center',
  },
  description: {
    marginTop: 16 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_ORANGE,
    textAlign: 'center',
  },
});
