import { StyleSheet, ViewStyle } from 'react-native';

interface ISelectCharmCarouselScreenStyles {
  carouselItem: ViewStyle;
}

export const styles = StyleSheet.create<ISelectCharmCarouselScreenStyles>({
  // TODO: change to correct styles
  carouselItem: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
});
