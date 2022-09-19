import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IFeltRecentStyles {
  container: ViewStyle;
  list: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IFeltRecentStyles>({
  container: {
    paddingHorizontal: 24,
  },
  list: {
    flex: 1,
    marginTop: 33,
    marginLeft: 24,
    marginRight: 8,
  },
  title: {
    marginTop: 48,
  },
  subtitle: {
    marginTop: 16,
  },
});
