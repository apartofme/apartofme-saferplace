import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISkipCharmAcknowledgementStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ISkipCharmAcknowledgementStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    paddingTop: 43,
    paddingBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
