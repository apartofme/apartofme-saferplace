import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ICharmCompletedScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ICharmCompletedScreenStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 73,
  },
  title: {
    marginTop: 32,
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    maxHeight: 120,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
