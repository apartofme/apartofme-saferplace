import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IQuestionCardScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  skip: TextStyle;
}

export const styles = StyleSheet.create<IQuestionCardScreenStyles>({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 40,
  },
  title: {
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  description: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 20,
    textAlign: 'center',
  },
  skip: {
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 24,
  },
});
