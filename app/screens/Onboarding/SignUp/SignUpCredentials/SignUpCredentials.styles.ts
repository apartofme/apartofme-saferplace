import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface ISignUpCredentialsScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  mt16: ViewStyle;
  bottomConatainer: ViewStyle;
  mb16: ViewStyle;
  footerTitle: ViewStyle;
  checkBoxTitle: TextStyle;
}

export const styles = StyleSheet.create<ISignUpCredentialsScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
  },
  subtitle: {
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 32 * WINDOW_COEFFICIENT,
  },
  mt16: {
    marginTop: 16 * WINDOW_COEFFICIENT,
  },
  bottomConatainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginBottom: 24,
  },
  mb16: {
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
  footerTitle: {
    textAlign: 'center',
  },
  checkBoxTitle: {
    paddingLeft: 12,
    maxWidth: 290,
    color: COLORS.BRILLIANT_WHITE,
  },
});
