import { StyleSheet, ViewStyle } from 'react-native';

import { SCROLL_VIEW_HEIGHT } from './VerticalSwipeView.data';

interface IMainHeaderStyles {
  scrollView: ViewStyle;
  topContentContainer: ViewStyle;
  bottomContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  scrollView: {
    height: SCROLL_VIEW_HEIGHT,
  },
  topContentContainer: {
    height: SCROLL_VIEW_HEIGHT / 2,
    justifyContent: 'flex-end',
  },
  bottomContentContainer: {
    height: SCROLL_VIEW_HEIGHT / 2,
  },
});
