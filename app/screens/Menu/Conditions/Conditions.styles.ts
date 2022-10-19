import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IConditionsScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IConditionsScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 20,
    marginBottom: 40,
  },
});
