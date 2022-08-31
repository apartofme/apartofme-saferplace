import { StyleSheet, ViewStyle } from 'react-native';

export interface ICarouselStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<ICarouselStyles>({
  container: {
    flex: 1,
  },
});
