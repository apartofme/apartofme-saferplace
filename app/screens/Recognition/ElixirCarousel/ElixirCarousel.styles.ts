import { StyleSheet, ViewStyle } from 'react-native';

interface IElixirCarouselScreenStyles {
  carouselItem: ViewStyle;
  container: ViewStyle;
}

export const styles = StyleSheet.create<IElixirCarouselScreenStyles>({
  carouselItem: {
    flex: 1,
    marginTop: 150,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  container: {
    paddingBottom: 15,
  },
});
