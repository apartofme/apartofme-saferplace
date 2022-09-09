import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IMainHeaderStyles {
  topContentContainer: ViewStyle;
  topTitle: TextStyle;
  topSubtitle: TextStyle;
  submitButton: ViewStyle;
  bottomTitle: TextStyle;
  bottomsubtitle: TextStyle;
  bottomContentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  topContentContainer: {
    justifyContent: 'flex-end',
  },
  topTitle: {
    textAlign: 'center',
  },
  topSubtitle: {
    textAlign: 'center',
    marginTop: 24,
  },
  submitButton: {
    marginTop: 90,
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
});
