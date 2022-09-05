import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IGrownUpsGuideScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IGrownUpsGuideScreenStyles>({
  container: {
    marginLeft: 26,
    marginRight: 23,
  },
  title: {
    marginTop: 48,
    marginBottom: 68,
  },
});
