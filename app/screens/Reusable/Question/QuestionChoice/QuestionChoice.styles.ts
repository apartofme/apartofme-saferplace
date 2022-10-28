import { StyleSheet, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';

interface IQuestionChoiceScreenStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IQuestionChoiceScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
});
