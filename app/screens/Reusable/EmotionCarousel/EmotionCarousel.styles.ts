import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IEmotionCarouselScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  carousel: ViewStyle;
  bottomButton: ViewStyle;
  modal: ViewStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    paddingHorizontal: 24,
    color: COLORS.BRILLIANT_WHITE,
  },
  carousel: {
    paddingBottom: 70,
  },
  bottomButton: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
  modal: {
    flex: 1,
    margin: 0,
  },
});
