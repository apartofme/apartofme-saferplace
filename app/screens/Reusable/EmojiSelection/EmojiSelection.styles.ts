import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IEmojiSelectionScreenStyles {
  title: TextStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<IEmojiSelectionScreenStyles>({
  title: {
    paddingHorizontal: 24,
    marginTop: 40,
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  container: {
    zIndex: 10,
  },
});
