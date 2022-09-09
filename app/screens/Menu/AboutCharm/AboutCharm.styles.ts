import { StyleSheet, TextStyle } from 'react-native';

interface IHomeScreenStyles {
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  // TODO: change on correct styles
  title: {
    marginTop: 181,
  },
  subtitle: {
    marginTop: 40,
  },
});
