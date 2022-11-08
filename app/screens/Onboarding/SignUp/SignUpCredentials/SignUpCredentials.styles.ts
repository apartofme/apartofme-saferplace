import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpCredentialsScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  mt16: ViewStyle;
  bottomConatainer: ViewStyle;
  mb24: ViewStyle;
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
  mt16: {
    marginTop: 16,
  },
  bottomConatainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginBottom: 24,
  },
  mb24: {
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
