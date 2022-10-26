import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementNicknamesScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementNicknamesScreenStyles>({
  container: {
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingTop: 22,
  },
  image: {
    width: 375,
    height: 345,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingTop: 32,
    paddingBottom: 24,
    textAlign: 'center',
  },
  description: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
