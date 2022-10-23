import { ImageStyle, StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface IUserImageTitleStyles {
  userName: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IUserImageTitleStyles>({
  userName: {
    marginTop: 15,
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
  },
  // TODO: change to real styles
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
});
