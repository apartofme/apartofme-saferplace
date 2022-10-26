import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface IFAQListItemStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  iconContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFAQListItemStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  title: {
    flex: 1,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 26,
    color: COLORS.LIGHT_GREY,
  },
  iconContainer: {
    marginLeft: 5,
  },
});
