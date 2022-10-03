import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementNicknamesScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementNicknamesScreenStyles>({
  container: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  // TODO: change to real styles
  image: {
    width: 375,
    height: 345,
  },
  title: {
    paddingVertical: 24,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
});
