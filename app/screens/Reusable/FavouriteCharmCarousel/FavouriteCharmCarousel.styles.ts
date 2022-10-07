import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IFavouriteCharmCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselScreenStyles>({
  container: {
    paddingTop: 40,
  },
  title: {
    paddingHorizontal: 24,
  },
});
