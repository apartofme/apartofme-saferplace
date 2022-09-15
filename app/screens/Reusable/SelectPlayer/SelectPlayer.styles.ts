import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ISelectPlayerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  radioButton: ViewStyle;
}

export const styles = StyleSheet.create<ISelectPlayerScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
  },
  radioButton: {
    marginBottom: 24,
  },
});
