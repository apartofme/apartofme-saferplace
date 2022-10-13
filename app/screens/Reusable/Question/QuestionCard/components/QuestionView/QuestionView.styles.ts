import { StyleSheet, ViewStyle } from 'react-native';

interface IQuestionViewStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IQuestionViewStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 63,
  },
});
