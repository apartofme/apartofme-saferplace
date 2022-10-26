import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

export interface ITrySomethingModalStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  maxCharacters: TextStyle;
}

export const styles = StyleSheet.create<ITrySomethingModalStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 48,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 24,
    color: COLORS.LIGHT_GREY,
  },
  maxCharacters: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 8,
  },
});
