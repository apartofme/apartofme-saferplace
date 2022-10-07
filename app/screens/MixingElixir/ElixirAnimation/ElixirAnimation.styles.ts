import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface IElixirAnimationScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IElixirAnimationScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 264,
    width: 200,
    paddingTop: 255,
    paddingBottom: 46,
  },
});
