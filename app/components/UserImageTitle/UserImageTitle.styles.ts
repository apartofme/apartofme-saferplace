import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IUserImageTitleStyles {
  container: ViewStyle;
  userName: TextStyle;
  opacity: ViewStyle;
  absolute: ViewStyle;
}

export const styles = StyleSheet.create<IUserImageTitleStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  opacity: {
    opacity: 0.5,
  },
  absolute: {
    position: 'absolute',
  },
});
