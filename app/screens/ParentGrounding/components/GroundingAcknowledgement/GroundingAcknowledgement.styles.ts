import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IGroundingAcknowledgementStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IGroundingAcknowledgementStyles>({
  container: {
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
  title: {
    flex: 1,
    maxHeight: 132,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
