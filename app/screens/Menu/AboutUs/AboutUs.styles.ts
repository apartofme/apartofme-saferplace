import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IAboutUsScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IAboutUsScreenStyles>({
  container: {
    marginHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 39,
  },
});
