import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IFeedbackScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  inputContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFeedbackScreenStyles>({
  container: {
    marginHorizontal: 24,
  },
  title: {
    marginTop: 48,
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    marginTop: 27,
    color: COLORS.BRILLIANT_WHITE,
  },
  inputContainer: {
    marginTop: 30,
    height: 160,
    marginBottom: 24,
  },
});
