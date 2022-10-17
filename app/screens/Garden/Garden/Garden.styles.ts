import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_HEIGHT } from '../../../constants/window';

export interface IGardenScreenStyles {
  avatarContainer: ViewStyle;
  avatar: ImageStyle;
  bookContainer: ViewStyle;
  book: ImageStyle;
  elixir: ImageStyle;
  plantArea: ViewStyle;
  titleContainer: ViewStyle;
  zIndex10: ViewStyle;
  displayNone: ViewStyle;
}

export const styles = StyleSheet.create<IGardenScreenStyles>({
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
  elixir: {
    position: 'absolute',
    left: 20,
    top: 40,
    height: 91,
    width: 70,
    zIndex: 100,
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
    borderWidth: 1,
    height: 75,
    borderRadius: 10,
    marginBottom: 24,
    marginHorizontal: 24,
    paddingLeft: 120,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  displayNone: {
    display: 'none',
  },
});
