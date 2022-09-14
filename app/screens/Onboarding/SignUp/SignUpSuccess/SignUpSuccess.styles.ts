import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface ISignUpSuccessScreenStyles {
  container: ViewStyle;
  avatar: ImageStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpSuccessScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 40,
  },
  avatar: {
    marginTop: 113,
  },
  title: {
    marginTop: 39,
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
});
