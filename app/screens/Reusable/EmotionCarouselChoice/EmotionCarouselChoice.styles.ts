import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IEmotionCarouselChoiceScreenStyles {
  container: ViewStyle;
  card: ViewStyle;
  subtitle: TextStyle;
  title: TextStyle;
  cardTitle: TextStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselChoiceScreenStyles>({
  container: {
    paddingTop: 40 * WINDOW_COEFFICIENT,
    paddingHorizontal: 40,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 34 * WINDOW_COEFFICIENT,
    marginTop: 48 * WINDOW_COEFFICIENT,
    marginHorizontal: 24,
    paddingHorizontal: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
    borderRadius: 24,
  },
  title: {
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
    marginTop: 57 * WINDOW_COEFFICIENT,
  },
  cardTitle: {
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
    maxWidth: 200,
    marginTop: 14,
  },
});
