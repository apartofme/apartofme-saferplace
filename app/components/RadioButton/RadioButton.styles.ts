import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

export interface IRadioButtonStyles {
  container: ViewStyle;
  title: TextStyle;
  activeTitle: TextStyle;
  activeBackground: ViewStyle;
}

export const styles = StyleSheet.create<IRadioButtonStyles>({
  container: {
    backgroundColor: COLORS.BLACK,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.WHITE,
    marginLeft: 12,
  },
  activeTitle: {
    color: COLORS.BLACK,
  },
  activeBackground: {
    backgroundColor: COLORS.WHITE,
  },
});
