import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IMainMenuStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  userActionTitile: TextStyle;
  menuItemsContainer: ViewStyle;
  logOutContainer: ViewStyle;
}

export const styles = StyleSheet.create<IMainMenuStyles>({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 19,
    marginBottom: 7,
  },
  subtitle: {
    marginBottom: 19,
  },
  userActionTitile: {
    marginTop: 19,
    marginBottom: 36,
  },
  menuItemsContainer: {
    marginTop: 52,
  },
  logOutContainer: {
    alignItems: 'center',
    marginBottom: 34,
  },
});
