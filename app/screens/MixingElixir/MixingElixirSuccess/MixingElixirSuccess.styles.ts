import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';

export interface IMixingElixirSuccessStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IMixingElixirSuccessStyles>({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 40 * WINDOW_COEFFICIENT,
  },

  title: {
    marginVertical: 24 * WINDOW_COEFFICIENT,
  },
});
