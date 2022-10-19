import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IChangePasswordScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IChangePasswordScreenStyles>({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 40,
    marginBottom: 24,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
  },
  inputContainer: {
    marginTop: 19,
  },
  input: {
    marginBottom: 16,
  },
});
