import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { WINDOW_COEFFICIENT } from '../../../constants/window';

interface IElixirTitleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IElixirTitleButtonScreenStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 128 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 77 * WINDOW_COEFFICIENT,
    textAlign: 'center',
  },
});
