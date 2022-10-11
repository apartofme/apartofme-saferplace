import { StyleSheet, ViewStyle } from 'react-native';

export interface IFavouriteCharmCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselStyles>({
  container: {
    flex: 1,
    paddingBottom: 73,
  },
  progressBar: {
    alignItems: 'center',
  },
});
