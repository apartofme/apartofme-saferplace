import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IAlertStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAlertStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 98,
    textAlign: 'center',
  },
});
