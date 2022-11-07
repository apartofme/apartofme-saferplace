import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';
import { isIOS } from '../../../../utils';

interface ITextInputPasswordToggleStyles {
  container: ViewStyle;

  input: TextStyle;

  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<ITextInputPasswordToggleStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },

  input: {
    flex: 1,
    paddingLeft: 24,
    color: COLORS.BRILLIANT_WHITE,
    paddingVertical: isIOS ? 20 : 16,
  },

  iconContainer: {
    paddingHorizontal: 24,
  },
});
