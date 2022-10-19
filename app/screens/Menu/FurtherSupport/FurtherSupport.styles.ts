import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IFurtherSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFurtherSupportScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48,
  },
  list: {
    paddingTop: 50,
    flex: 1,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
