import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IElixirAnimationScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IElixirAnimationScreenStyles>({
  container: {
    flex: 1,
  },
  image: {
    paddingTop: 255,
    paddingBottom: 46,
  },
});
