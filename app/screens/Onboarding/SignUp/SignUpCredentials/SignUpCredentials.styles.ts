import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpCredentialsScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  input: ViewStyle;
  bottomConatainer: ViewStyle;
  focused: ViewStyle;
  whiteColor: TextStyle;
  greyColor: TextStyle;
  error: TextStyle;
}

export const styles = StyleSheet.create<ISignUpCredentialsScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 32,
  },
  input: {
    marginBottom: 16,
  },
  bottomConatainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginBottom: 24,
  },
  focused: {
    display: 'none',
  },
  whiteColor: {
    color: COLORS.BRILLIANT_WHITE,
  },
  greyColor: {
    color: COLORS.LIGHT_GREY,
  },
  error: {
    color: COLORS.ERROR,
    paddingTop: 24,
  },
});
