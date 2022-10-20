import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IImageTitleSubtitleStyles {
  container: ViewStyle;

  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IImageTitleSubtitleStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    paddingBottom: 24,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    minHeight: 100,
    marginBottom: 40,
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
  },
});
