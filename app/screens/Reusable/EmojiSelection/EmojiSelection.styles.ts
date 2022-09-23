import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IEmojiSelectionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmojiSelectionScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
  },
});
