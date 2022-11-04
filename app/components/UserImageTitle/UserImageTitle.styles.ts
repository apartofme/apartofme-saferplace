import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../themes/colors';

interface IUserImageTitleStyles {
  container: ViewStyle;
  userName: TextStyle;
}

export const styles = StyleSheet.create<IUserImageTitleStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    marginTop: 10,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
});
