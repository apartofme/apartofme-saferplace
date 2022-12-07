import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../../constants/window';
import { COLORS } from '../../../../../themes/colors';

interface IContentViewStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IContentViewStyles>({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 350 * WINDOW_COEFFICIENT,
    alignItems: 'center',
  },
  title: {
    maxWidth: 295,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    maxWidth: 295,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
