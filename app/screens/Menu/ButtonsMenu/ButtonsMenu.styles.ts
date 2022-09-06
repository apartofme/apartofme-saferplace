import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IButtonsMenuScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IButtonsMenuScreenStyles>({
  container: {
    marginLeft: 26,
    marginRight: 23,
  },
  title: {
    marginTop: 48,
    marginBottom: 68,
  },
});
