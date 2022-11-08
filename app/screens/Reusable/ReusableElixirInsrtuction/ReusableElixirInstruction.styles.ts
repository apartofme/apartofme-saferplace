import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IReusableElixirInstructionStyles {
  container: ViewStyle;
  title: ImageStyle;
}

export const styles = StyleSheet.create<IReusableElixirInstructionStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 95,
    marginBottom: 48,
    width: 320,
    height: 75,
  },
});
