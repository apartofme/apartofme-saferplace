import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IElixirTitleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IElixirTitleButtonScreenStyles>({
  container: {
    paddingTop: 128,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 77,
    textAlign: 'center',
  },
});
