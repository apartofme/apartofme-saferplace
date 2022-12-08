import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT, WINDOW_WIDTH } from '../../../constants/window';

import { COLORS } from '../../../themes/colors';

export interface IElixirDoubleInteractionStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  title: TextStyle;
  animation: ViewStyle;
}

export const styles = StyleSheet.create<IElixirDoubleInteractionStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 44,
    paddingBottom: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingTop: 80,
    maxWidth: 327,
    textAlign: 'center',
    marginBottom: 60,
  },
  animation: {
    width: WINDOW_WIDTH + 10,
    position: 'absolute',
    top: WINDOW_COEFFICIENT * 100 - 70,
  },
});
