import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_WIDTH } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';

interface IImageTitleSubtitleStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IImageTitleSubtitleStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: WINDOW_WIDTH,
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
