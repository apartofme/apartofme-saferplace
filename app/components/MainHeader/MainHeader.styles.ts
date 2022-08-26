import { StyleSheet, ViewStyle } from 'react-native';

interface IMainHeaderStyles {
  container: ViewStyle;
  emptyContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainHeaderStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emptyContainer: {
    width: 44,
    height: 44,
  },
});
