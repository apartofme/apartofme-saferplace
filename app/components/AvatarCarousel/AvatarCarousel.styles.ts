import { StyleSheet, ViewStyle } from 'react-native';

export interface IAvatarCarouselStyles {
  container: ViewStyle;
  progressBar: ViewStyle;
}

export const styles = StyleSheet.create<IAvatarCarouselStyles>({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  progressBar: {
    alignItems: 'center',
  },
});
