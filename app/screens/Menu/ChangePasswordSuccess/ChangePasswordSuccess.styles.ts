import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface IChangePasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles = StyleSheet.create<IChangePasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
  },
  title: {
    marginTop: 46,
  },
  subtitle: {
    marginTop: 24,
  },
});
