import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISkipCharmEmojiSelectionStyles {
  topContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ISkipCharmEmojiSelectionStyles>({
  topContainer: {
    zIndex: 10,
  },
  title: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
