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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 40,
  },

  title: {
    paddingTop: 32,
    paddingBottom: 24,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    minHeight: 100,
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
  },
});
