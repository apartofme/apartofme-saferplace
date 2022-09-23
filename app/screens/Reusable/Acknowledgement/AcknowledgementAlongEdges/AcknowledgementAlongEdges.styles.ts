import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementAlongEdgesStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementAlongEdgesStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  image: {
    width: 191,
    height: 191,
    marginTop: 76,
    marginBottom: 54,
    borderRadius: 100,
  },
  description: {
    textAlign: 'center',
  },
});
