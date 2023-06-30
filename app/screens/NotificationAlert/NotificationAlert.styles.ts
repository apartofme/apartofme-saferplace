import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IErrorAlertStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IErrorAlertStyles>({
  container: {
    backgroundColor: COLORS.MEDIUM_GREY,
    paddingBottom: 16,
  },
  title: {
    paddingBottom: 12,
  },
});
