import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IElixirInstructionStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IElixirInstructionStyles>({
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
