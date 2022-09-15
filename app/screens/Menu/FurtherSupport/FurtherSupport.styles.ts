import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IFurtherSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
}

export const styles = StyleSheet.create<IFurtherSupportScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
  },
  list: {
    paddingTop: 50,
    flex: 1,
  },
});
