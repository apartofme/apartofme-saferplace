import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IRadioButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<IRadioButtonScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    minHeight: 75,
    color: COLORS.BRILLIANT_WHITE,
  },
  description: {
    paddingTop: 16,
    color: COLORS.LIGHT_GREY,
  },
  listContainer: {
    flex: 1,
    paddingTop: 35,
  },
});
