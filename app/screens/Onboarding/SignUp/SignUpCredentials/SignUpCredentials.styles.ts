import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';

interface ISignUpCredentialsScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  mt16: ViewStyle;
  bottomConatainer: ViewStyle;
  mb24: ViewStyle;
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
  mb24: {
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
});
