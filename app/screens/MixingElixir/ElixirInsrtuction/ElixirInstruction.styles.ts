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
    marginTop: 80,
    paddingHorizontal: 24,
  },
});
