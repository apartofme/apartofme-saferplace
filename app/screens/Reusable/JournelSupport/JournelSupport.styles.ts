import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IJournelSupportScreenStyles {
  container: ViewStyle;
  description: TextStyle;
  inputContainer: ViewStyle;
  focused: ViewStyle;
  supportContainer: ViewStyle;
}

export const styles = StyleSheet.create<IJournelSupportScreenStyles>({
  container: {
    paddingTop: 40,
    marginHorizontal: 24,
  },
  inputContainer: {
    marginTop: 36,
    height: 160,
    marginBottom: 24,
  },
  description: {
    marginTop: 20,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  focused: {
    display: 'none',
  },
  supportContainer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
});
