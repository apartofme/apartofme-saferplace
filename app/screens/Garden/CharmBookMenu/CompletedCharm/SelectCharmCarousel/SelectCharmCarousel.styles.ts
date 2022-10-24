import { StyleSheet, ViewStyle } from 'react-native';

interface ISelectCharmCarouselScreenStyles {
  container: ViewStyle;
  carousel: ViewStyle;
}

export const styles = StyleSheet.create<ISelectCharmCarouselScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  carousel: {
    paddingBottom: 75,
  },
});
