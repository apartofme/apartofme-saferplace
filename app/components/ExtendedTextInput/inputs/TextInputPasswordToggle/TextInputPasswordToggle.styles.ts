import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ITextInputPasswordToggleStyles {
  container: ViewStyle;

  input: TextStyle;

  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<ITextInputPasswordToggleStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    //* fix Android indents
    padding: 0,
    color: COLORS.BRILLIANT_WHITE,
  },

  iconContainer: {
    paddingLeft: 24,
    maxHeight: 17,
  },
});
