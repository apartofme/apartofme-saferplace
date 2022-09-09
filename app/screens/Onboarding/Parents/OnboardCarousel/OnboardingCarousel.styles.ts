import { StyleSheet, ViewStyle } from 'react-native';

interface IOnboardingCarouselScreenStyles {
  container: ViewStyle;
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  container: {},
  carouselItem: {
    paddingHorizontal: 40,
  },
});
