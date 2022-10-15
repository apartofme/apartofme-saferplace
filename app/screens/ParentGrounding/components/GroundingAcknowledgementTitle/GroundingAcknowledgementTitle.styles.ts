import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IGroundingAcknowledgementTitleStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IGroundingAcknowledgementTitleStyles>({
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
