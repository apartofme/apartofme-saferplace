import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ITitleButtonStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ITitleButtonStyles>({
  container: {
    paddingTop: 96,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    marginTop: 106,
    textAlign: 'center',
  },
});
