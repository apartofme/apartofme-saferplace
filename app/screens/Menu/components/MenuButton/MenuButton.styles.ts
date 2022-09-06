import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IMenuButtonStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IMenuButtonStyles>({
  container: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  title: {
    marginLeft: 17,
  },
});
