import { StyleSheet, ViewStyle } from 'react-native';

export interface ICarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<ICarouselStyles>({
  container: {
    flex: 1,
    paddingBottom: 45,
    alignItems: 'center',
  },
  progressBar: {
    alignItems: 'center',
  },
});
