import { StyleSheet, ViewStyle } from 'react-native';

export interface IFavouriteCharmCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
  itemContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFavouriteCharmCarouselStyles>({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  progressBar: {
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 60,
    paddingBottom: 72,
  },
});
