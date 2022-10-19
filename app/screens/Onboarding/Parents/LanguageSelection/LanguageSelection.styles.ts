import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ILanguageSelectionStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ILanguageSelectionStyles>({
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    paddingBottom: 72,
    color: COLORS.BRILLIANT_WHITE,
  },
});
