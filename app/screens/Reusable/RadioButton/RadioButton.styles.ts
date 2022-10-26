import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IRadioButtonScreenStyles {
  container: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IRadioButtonScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  description: {
    paddingTop: 16,
    paddingBottom: 35,
    color: COLORS.LIGHT_GREY,
  },
});
