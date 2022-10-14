import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IQuestionCardScreenStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
  skip: TextStyle;
}

export const styles = StyleSheet.create<IQuestionCardScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    textAlign: 'center',
    marginTop: 48,
    marginBottom: 75,
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 28,
  },
  skip: {
    textAlign: 'center',
    marginBottom: 24,
  },
});
