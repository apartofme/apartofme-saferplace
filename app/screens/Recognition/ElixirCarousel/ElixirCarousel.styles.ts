import { StyleSheet, ViewStyle } from 'react-native';

interface IElixirCarouselScreenStyles {
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<IElixirCarouselScreenStyles>({
  // TODO: change to correct styles
  carouselItem: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
});
