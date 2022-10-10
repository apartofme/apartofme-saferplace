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
    padding: 70,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 24,
    paddingHorizontal: 24,
    backgroundColor: 'red',
  },
  title: {
    marginBottom: 16,
  },
});
