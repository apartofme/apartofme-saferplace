import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IReusableElixirInstructionStyles {
  container: ViewStyle;
  title: ImageStyle;
}

export const styles = StyleSheet.create<IReusableElixirInstructionStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
    width: 320,
    height: 75,
  },
});
