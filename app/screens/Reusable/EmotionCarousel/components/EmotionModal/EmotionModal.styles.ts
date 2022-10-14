import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IEmotionModalStyles {
  container: ViewStyle;
  title: TextStyle;
  hint: TextStyle;
}

export const styles = StyleSheet.create<IEmotionModalStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 48,
  },
  hint: {
    paddingTop: 16,
  },
});
