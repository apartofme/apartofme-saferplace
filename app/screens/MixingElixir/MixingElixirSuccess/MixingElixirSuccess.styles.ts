import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IMixingElixirSuccessStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IMixingElixirSuccessStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 264,
    width: 200,
  },
});
