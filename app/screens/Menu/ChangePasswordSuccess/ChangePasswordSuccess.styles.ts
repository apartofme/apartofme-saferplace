import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';

interface IChangePasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IChangePasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50 * WINDOW_COEFFICIENT,
  },
  title: {
    marginTop: 46 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    marginTop: 24 * WINDOW_COEFFICIENT,
  },
});
