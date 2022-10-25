import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ICharmCompletedScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ICharmCompletedScreenStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 354,
    paddingHorizontal: 40,
  },
  title: {
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
