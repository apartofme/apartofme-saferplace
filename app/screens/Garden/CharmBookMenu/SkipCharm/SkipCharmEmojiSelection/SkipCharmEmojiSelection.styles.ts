import { StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface ISkipCharmEmojiSelectionStyles {
  title: TextStyle;
}

export const styles = StyleSheet.create<ISkipCharmEmojiSelectionStyles>({
  title: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
