import { StyleSheet, ViewStyle } from 'react-native';

interface IImageTitleSubtitleStyles {
  container: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IImageTitleSubtitleStyles>({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    marginVertical: 24,
    textAlign: 'center',
  },
  subtitle: {
    minHeight: 120,
    marginBottom: 22,
    textAlign: 'center',
  },
});
