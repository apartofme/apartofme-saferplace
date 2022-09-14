import { StyleSheet, ViewStyle } from 'react-native';

interface IOnboardingCarouselScreenStyles {
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  carouselItem: {
    paddingHorizontal: 40,
  },
});
