import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ICompletedCharmEndStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ICompletedCharmEndStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  title: {
    paddingTop: 43,
    paddingBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
