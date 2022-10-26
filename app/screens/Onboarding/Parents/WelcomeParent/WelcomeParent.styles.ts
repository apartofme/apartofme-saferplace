import { StyleSheet, ViewStyle } from 'react-native';

interface IWelcomeParentScreenStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  signUpButton: ViewStyle;
}

export const styles = StyleSheet.create<IWelcomeParentScreenStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 72,
    paddingHorizontal: 24,
  },
  imageContainer: {
    paddingVertical: 16,
  },
  signUpButton: {
    marginBottom: 24,
    marginHorizontal: 40,
  },
});
