import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ILoadingScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<ILoadingScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
  timer: {
    marginBottom: 74,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
    marginBottom: 24,
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
