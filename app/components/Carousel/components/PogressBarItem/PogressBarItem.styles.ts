import { StyleSheet, ViewStyle } from 'react-native';

export interface ICarouselStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICarouselStyles>({
  // TODO: change for correct styles
  container: {
    backgroundColor: 'gray',
    borderRadius: 99,
    width: 50,
    height: 50,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  // TODO: change for correct styles
  contentContainer: {
    borderRadius: 99,
    backgroundColor: 'black',
    flex: 1,
  },
});
