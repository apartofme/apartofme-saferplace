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
    marginTop: 24,
    marginHorizontal: 15,
  },
  // TODO: change for correct styles
  emptyContainer: {
    width: 32,
    height: 32,
  },
});
