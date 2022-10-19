import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

interface IChangePasswordSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IChangePasswordSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
  },
  title: {
    marginTop: 46,
  },
  subtitle: {
    marginTop: 24,
  },
});
