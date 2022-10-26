import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IMixingElixirSuccessStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IMixingElixirSuccessStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  image: {
    height: 264,
    width: 200,
  },
  title: {
    marginVertical: 24,
  },
});
