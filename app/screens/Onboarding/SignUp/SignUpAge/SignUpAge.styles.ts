import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpAgeScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpAgeScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 16,
    marginBottom: 52,
  },
});
