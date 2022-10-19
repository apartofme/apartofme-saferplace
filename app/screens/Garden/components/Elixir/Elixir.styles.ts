import { ImageStyle, StyleSheet } from 'react-native';

export interface IElixirStyles {
  elixir: ImageStyle;
}

export const styles = StyleSheet.create<IElixirStyles>({
  elixir: {
    position: 'absolute',
    height: 80,
    width: 61,
    top: 40,
    left: 24,
    zIndex: 1000,
  },
});
