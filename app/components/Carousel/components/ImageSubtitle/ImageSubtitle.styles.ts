import { StyleSheet, TextStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IImageSubtitleStyles {
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IImageSubtitleStyles>({
  subtitle: {
    paddingTop: 50,
    marginBottom: 52,
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
  },
});
