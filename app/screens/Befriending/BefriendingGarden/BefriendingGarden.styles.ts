import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_HEIGHT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

export interface IBefriendingGardenScreenStyles {
  avatarContainer: ViewStyle;
  avatar: ImageStyle;
  bookContainer: ViewStyle;
  book: ImageStyle;
  plantArea: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  zIndex10: ViewStyle;
}

export const styles = StyleSheet.create<IBefriendingGardenScreenStyles>({
  avatarContainer: {
    position: 'absolute',
    right: 20,
    top: 40,
    zIndex: 100,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  zIndex10: {
    zIndex: 10,
  },
  plantArea: {
    top: (WINDOW_HEIGHT - 100) / (WINDOW_HEIGHT < 600 ? 7 : 6),
    zIndex: 0,
  },
  bookContainer: {
    position: 'absolute',
    bottom: 24,
    zIndex: 10,
    left: 24,
  },
  book: {
    height: 91,
    width: 100,
  },
  titleContainer: {
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 24,
    marginHorizontal: 24,
    paddingLeft: 122,
    paddingRight: 16,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingVertical: 20,
  },
});
