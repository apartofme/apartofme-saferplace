import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

export interface IElixirDoubleInteractionStyles {
  container: ViewStyle;
  buttonsContainer: ViewStyle;
  title: TextStyle;
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
});
