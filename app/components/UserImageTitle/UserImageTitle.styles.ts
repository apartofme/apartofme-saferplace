import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../themes/colors';

interface IUserImageTitleStyles {
  userName: TextStyle;
}

export const styles = StyleSheet.create<IUserImageTitleStyles>({
  userName: {
    marginTop: 15,
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
  },
});
