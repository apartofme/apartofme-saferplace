import { StyleSheet, ViewStyle } from 'react-native';

interface IEditProfileScreenStyles {
  container: ViewStyle;
  carouselContainer: ViewStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IEditProfileScreenStyles>({
  container: {
    paddingHorizontal: 40,
  },
  carouselContainer: {
    flex: 1,
    marginRight: 24,
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 40,
  },
});
