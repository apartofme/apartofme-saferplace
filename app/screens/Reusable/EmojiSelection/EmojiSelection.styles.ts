import { StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IEmojiSelectionScreenStyles {
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmojiSelectionScreenStyles>({
  title: {
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
