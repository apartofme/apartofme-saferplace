import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IEmotionSelectionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmotionSelectionScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 48,
  },
});
