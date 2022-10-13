import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IQuestionChoiceScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IQuestionChoiceScreenStyles>({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginTop: 48,
  },
});
