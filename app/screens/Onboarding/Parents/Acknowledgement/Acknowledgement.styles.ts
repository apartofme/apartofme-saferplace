import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  title: {
    paddingTop: 60,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
