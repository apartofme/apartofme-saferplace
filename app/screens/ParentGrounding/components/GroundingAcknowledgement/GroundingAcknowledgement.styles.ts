import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IGroundingAcknowledgementStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IGroundingAcknowledgementStyles>({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
  },
  // TODO: change to correct style
  image: {
    height: 350,
    width: 200,
  },
});
