import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IBookStyles {
  book: ImageStyle;
  bookContainer: ViewStyle;
}

export const styles = StyleSheet.create<IBookStyles>({
  bookContainer: {
    position: 'absolute',
    bottom: 24,
    zIndex: 10,
    left: 24,
  },
  book: {
    resizeMode: 'contain',
    height: 91,
    width: 100,
  },
});
