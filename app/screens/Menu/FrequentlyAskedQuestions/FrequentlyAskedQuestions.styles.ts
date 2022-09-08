import { StyleSheet, ViewStyle } from 'react-native';

interface IFAQSectionListStyles {
  container: ViewStyle;
  title: ViewStyle;
  searchBoxContainer: ViewStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFAQSectionListStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
  },
  searchBoxContainer: {
    marginTop: 60,
  },
  listContainer: {
    flex: 1,
    marginTop: 40,
  },
});
