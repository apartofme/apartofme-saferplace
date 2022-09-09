import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IFAQSectionListStyles {
  container: ViewStyle;
  sectionListItemTitle: TextStyle;
  sectionListItemContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFAQSectionListStyles>({
  container: {
    flex: 1,
  },
  sectionListItemTitle: {
    marginBottom: 27,
  },
  sectionListItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
