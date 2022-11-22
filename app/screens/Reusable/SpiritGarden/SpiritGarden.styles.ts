import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import {
  WINDOW_COEFFICIENT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

export interface ISpiritGardenScreenStyles {
  avatarContainer: ViewStyle;
  avatar: ImageStyle;
  bookContainer: ViewStyle;
  book: ImageStyle;
  plantArea: ViewStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  onPressView: ViewStyle;
}

export const styles = StyleSheet.create<ISpiritGardenScreenStyles>({
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
  plantArea: {
    top: (WINDOW_HEIGHT - 100) / (WINDOW_HEIGHT < 600 ? 7 : 6),
    zIndex: 0,
    alignItems: 'center',
  },
  onPressView: {
    width: WINDOW_WIDTH - 60 * WINDOW_COEFFICIENT,
    position: 'absolute',
    height: 420 * WINDOW_COEFFICIENT,
    top: WINDOW_COEFFICIENT * 10 + 10,
    zIndex: 10,
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
