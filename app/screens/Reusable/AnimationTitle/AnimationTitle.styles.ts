import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IAnimationTitleStyles {
  container: ViewStyle;
  title: TextStyle;
  elixirContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAnimationTitleStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  elixirContainer: {
    marginBottom: -142,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 134,
    textAlign: 'center',
  },
});
