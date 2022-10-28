import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISkipCharmAlertStyles {
  container: ViewStyle;
  title: TextStyle;
  bottomButton: ViewStyle;
}

export const styles = StyleSheet.create<ISkipCharmAlertStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    paddingVertical: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  bottomButton: {
    marginHorizontal: 40,
    marginBottom: 16,
  },
});
