import { StyleSheet, ViewStyle } from 'react-native';

interface IOnboardingCarouselScreenStyles {
  carouselItem: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IOnboardingCarouselScreenStyles>({
  carouselItem: {
    paddingHorizontal: 24,
  },
  button: {
    alignSelf: 'center',
    marginTop: -24,
    marginBottom: 24,
  },
});
