import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IRadioButtonScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<IRadioButtonScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  description: {
    paddingBottom: 35,
    color: COLORS.LIGHT_GREY,
  },
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
});
