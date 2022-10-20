import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpAvatarScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
  whiteColor: TextStyle;
}

export const styles = StyleSheet.create<ISignUpAvatarScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  carousel: {
    alignSelf: 'center',
  },
  whiteColor: {
    color: COLORS.BRILLIANT_WHITE,
  },
});
