import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IRadioButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IRadioButtonScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 48,
  },
});
