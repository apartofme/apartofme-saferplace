import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IHomeScreenStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  buttonContainer: ViewStyle;
  cancelButton: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 27,
    paddingRight: 21,
  },
  listContainer: {
    flex: 1,
    marginTop: 42,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 24,
  },
  buttonContainer: {
    paddingHorizontal: 41,
  },
  cancelButton: {
    marginTop: 23,
    marginBottom: 40,
  },
});
