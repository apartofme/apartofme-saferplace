import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementTitleScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementTitleScreenStyles>({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    marginBottom: 127,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
});
