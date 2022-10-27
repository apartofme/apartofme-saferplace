import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

export interface IConversationsStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  button: ViewStyle;
  scrollView: ViewStyle;
}

export const styles = StyleSheet.create<IConversationsStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 38,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    marginBottom: 61 * WINDOW_COEFFICIENT,
  },
  button: {
    marginVertical: 24 * WINDOW_COEFFICIENT,
    marginHorizontal: 40,
  },
  scrollView: {
    marginTop: 10,
  },
});
