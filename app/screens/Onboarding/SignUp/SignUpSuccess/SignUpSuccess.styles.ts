import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

interface ISignUpSuccessScreenStyles {
  container: ViewStyle;
  mt113: ImageStyle;
  title: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpSuccessScreenStyles>({
  container: {
    flex: 1,
  },
  mt113: {
    marginTop: 113,
  },
  title: {
    marginTop: 46,
    marginBottom: 24,
  },
});
