import { StyleSheet, ViewStyle } from 'react-native';

interface IImageTitleSubTitleStyles {
  container: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<IImageTitleSubTitleStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
