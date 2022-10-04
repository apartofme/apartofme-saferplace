import { ImageStyle, StyleSheet, TextStyle } from 'react-native';

export interface IImageSubtitleStyles {
  image: ImageStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IImageSubtitleStyles>({
  // TODO: change to correct styles
  image: {
    height: 360,
    width: 250,
    marginBottom: 50,
  },
  // TODO: change to correct styles
  subtitle: {
    marginBottom: 52,
    textAlign: 'center',
  },
});
