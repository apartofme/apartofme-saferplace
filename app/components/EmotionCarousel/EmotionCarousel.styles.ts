import { StyleSheet, ViewStyle } from 'react-native';

export interface IEmotionCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselStyles>({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  progressBar: {
    alignItems: 'center',
  },
});
