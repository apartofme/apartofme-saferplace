import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IEmotionCarouselItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselItemStyles>({
  // TODO: change for correct styles
  container: {
    flex: 1,
    paddingHorizontal: 64,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    maxHeight: 240,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
  },
});
