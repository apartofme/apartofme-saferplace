import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../../themes/colors';

interface IQuestionViewStyles {
  container: ViewStyle;
}

export const styles = StyleSheet.create<IQuestionViewStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 194,
    paddingHorizontal: 16,
    borderWidth: 4,
    borderRadius: 16,
    borderColor: COLORS.LIGHT_ORANGE,
    backgroundColor: COLORS.PRIMARY_PURPLE,
  },
});
