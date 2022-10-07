import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IGardenScreenStyles {
  avatar: ImageStyle;
  bookContainer: ViewStyle;
  book: ImageStyle;
  elixir: ImageStyle;
  plantArea: ViewStyle;
  titleContainer: ViewStyle;
}

export const styles = StyleSheet.create<IGardenScreenStyles>({
  avatar: {
    position: 'absolute',
    right: 20,
    top: 10,
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  elixir: {
    position: 'absolute',
    left: 20,
    top: 10,
    height: 91,
    width: 70,
  },
  plantArea: {
    zIndex: 1,
    top: 80,
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
    borderRadius: 10,
    marginBottom: 24,
    marginHorizontal: 24,
    paddingLeft: 120,
    paddingVertical: 22,
    backgroundColor: 'white',
  },
});
