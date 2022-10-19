import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IFeedbackSuccessScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IFeedbackSuccessScreenStyles>({
  container: {
    alignItems: 'center',
  },
  image: {
    marginTop: 50,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 27,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 24,
  },
});
