import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 34,
    marginTop: 48,
    marginHorizontal: 40,
    paddingHorizontal: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
    borderRadius: 24,
  },
  title: {
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
    maxWidth: 327,
  },
  subtitle: {
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
    marginTop: 57,
  },
  cardTitle: {
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
    maxWidth: 200,
    marginTop: 14,
  },
});
