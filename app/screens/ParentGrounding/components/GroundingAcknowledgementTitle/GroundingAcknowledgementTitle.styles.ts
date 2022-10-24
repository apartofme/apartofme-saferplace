import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 74,
  },
  title: {
    marginTop: 43,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    marginTop: 24,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    maxHeight: 120,
  },
});
