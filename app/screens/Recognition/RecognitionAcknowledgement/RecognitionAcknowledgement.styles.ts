import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IElixirCarouselScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IElixirCarouselScreenStyles>({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  image: {
    marginTop: 67,
    width: 200,
    height: 260,
  },
  title: {
    textAlign: 'center',
    maxWidth: 295,
    marginTop: 34,
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 295,
    marginTop: 16,
  },
});
