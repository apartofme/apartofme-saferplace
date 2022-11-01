import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';

export interface IEmotionModalStyles {
  container: ViewStyle;
  input: TextStyle;
}

export const styles = StyleSheet.create<IEmotionModalStyles>({
  container: {
    flex: 1,
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  input: {
    marginTop: 53 * WINDOW_COEFFICIENT,
    marginBottom: 8 * WINDOW_COEFFICIENT,
  },
});
