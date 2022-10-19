import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IMenuSwitchRowStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IMenuSwitchRowStyles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
  },
});
