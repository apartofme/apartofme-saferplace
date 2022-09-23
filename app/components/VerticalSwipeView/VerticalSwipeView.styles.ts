import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IMainHeaderStyles {
  topContentContainer: ViewStyle;
  topTitle: TextStyle;
  topSubtitle: TextStyle;
  submitButton: ViewStyle;
  bottomTitle: TextStyle;
  bottomsubtitle: TextStyle;
  bottomContentContainer: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  topContentContainer: {
    justifyContent: 'space-between',
  },
  topTitle: {
    marginTop: 24,
    textAlign: 'center',
  },
  topSubtitle: {
    textAlign: 'center',
    marginTop: 24,
  },
  submitButton: {
    marginTop: 30,
    marginBottom: 24,
    marginHorizontal: 40,
  },
  bottomTitle: {
    marginTop: 140,
  },
  bottomsubtitle: {
    marginTop: 37,
  },
  bottomContentContainer: {
    paddingHorizontal: 24,
  },
  // TODO: change to correct styles
  image: {
    width: 200,
    height: 200,
  },
});
