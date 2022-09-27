import { StyleSheet, ViewStyle } from 'react-native';

export interface ITrySomethingCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<ITrySomethingCarouselStyles>({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  progressBar: {
    alignItems: 'center',
  },
});
