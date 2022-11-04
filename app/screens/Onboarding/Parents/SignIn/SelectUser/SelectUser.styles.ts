import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISelectUserScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ISelectUserScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 15,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingLeft: 24,
    marginBottom: 30,
  },
});
