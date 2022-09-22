import { StyleSheet, ViewStyle } from 'react-native';

export interface IElixirButtonStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IElixirButtonStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
