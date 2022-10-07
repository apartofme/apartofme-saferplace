import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IElixirInstructionStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IElixirInstructionStyles>({
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
