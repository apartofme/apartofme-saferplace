import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpNicknameStyles {
  container: ViewStyle;
  subtitle: TextStyle;
  whiteColor: TextStyle;
}

export const styles = StyleSheet.create<ISignUpNicknameStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    paddingTop: 16,
    paddingBottom: 32,
    color: COLORS.LIGHT_GREY,
  },
  whiteColor: {
    color: COLORS.BRILLIANT_WHITE,
  },
});
