import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface ISignUpSuccessScreenStyles {
  container: ViewStyle;
  mt113: ImageStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpSuccessScreenStyles>({
  container: {
    flex: 1,
    marginHorizontal: 24,
  },
  mt113: {
    marginTop: 113,
  },
  title: {
    marginTop: 46,
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
  },
});
