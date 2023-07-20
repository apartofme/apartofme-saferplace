import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IErrorAlertStyles {
  container: ViewStyle;
  title: TextStyle;
  message: TextStyle;
}

export const styles = StyleSheet.create<IErrorAlertStyles>({
  container: {
    backgroundColor: COLORS.MEDIUM_GREY,
    paddingBottom: 12,
  },
  title: {
    paddingBottom: 6,
    fontFamily: 'Poppins-Regular',
  },
  message: {
    fontFamily: 'Poppins-Regular',
  },
});
