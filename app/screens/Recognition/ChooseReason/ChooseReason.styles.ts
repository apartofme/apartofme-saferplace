import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IChooseReasonScreenStyles {
  container: ViewStyle;
  subtitle: TextStyle;
  submitButton: ViewStyle;
  skipTitle: TextStyle;
}

export const styles = StyleSheet.create<IChooseReasonScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingTop: 40,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 36,
    color: COLORS.BRILLIANT_WHITE,
  },
  submitButton: {
    marginBottom: 28,
  },
  skipTitle: {
    textAlign: 'center',
  },
});
