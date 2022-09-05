import { StyleSheet, TextStyle } from 'react-native';

interface IHomeScreenStyles {
  title: TextStyle;
  subTitle: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  // TODO: change on correct styles
  title: {
    marginTop: 181,
  },
  subTitle: {
    marginTop: 40,
  },
});
