import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IGroundingAcknowledgementScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IGroundingAcknowledgementScreenStyles>({
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
  subtitle: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    maxWidth: 295,
  },
});
