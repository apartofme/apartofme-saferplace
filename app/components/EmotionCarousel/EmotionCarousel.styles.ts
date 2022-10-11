import { StyleSheet, ViewStyle } from 'react-native';

export interface IEmotionCarouselStyles {
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselStyles>({
  progressBar: {
    alignItems: 'center',
  },
});
