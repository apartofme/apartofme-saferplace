import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IGroundingAcknowledgementTitleStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IGroundingAcknowledgementTitleStyles>({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 74 * WINDOW_COEFFICIENT,
  },
  title: {
    marginTop: 43 * WINDOW_COEFFICIENT,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    marginTop: 24 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    maxHeight: 120,
  },
});
