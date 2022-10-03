import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IReadOutLoudScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IReadOutLoudScreenStyles>({
  // TODO: change to correct styles
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginTop: 48,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 16,
  },
  image: {
    marginTop: 33,
    width: 250,
    height: 400,
  },
});
