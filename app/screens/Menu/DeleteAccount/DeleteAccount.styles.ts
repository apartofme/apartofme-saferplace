import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IDeleteAccountStyles {
  container: ViewStyle;
  title: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  subtitle: TextStyle;
  buttonContainer: ViewStyle;
  forgotPassword: TextStyle;
}

export const styles = StyleSheet.create<IDeleteAccountStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 40,
    marginBottom: 24,
  },
  subtitle: {
    marginBottom: 46,
    color: COLORS.BRILLIANT_WHITE,
  },
  inputContainer: {
    marginTop: 19,
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    paddingHorizontal: 40,
    marginBottom: 36,
  },
  forgotPassword: {
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
    marginBottom: 24,
  },
});
