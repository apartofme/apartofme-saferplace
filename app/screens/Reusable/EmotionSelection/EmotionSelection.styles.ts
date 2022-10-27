import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IEmotionSelectionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmotionSelectionScreenStyles>({
  container: {
    paddingLeft: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    paddingBottom: 36,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
});
