import { StyleSheet, ViewStyle } from 'react-native';

interface IElixirCarouselScreenStyles {
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<IElixirCarouselScreenStyles>({
  carouselItem: {
    paddingHorizontal: 40,
  },
});
