import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IEmotionModalStyles {
  container: ViewStyle;
  input: TextStyle;
}

export const styles = StyleSheet.create<IEmotionModalStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  input: {
    marginTop: 53,
    marginBottom: 8,
  },
});
