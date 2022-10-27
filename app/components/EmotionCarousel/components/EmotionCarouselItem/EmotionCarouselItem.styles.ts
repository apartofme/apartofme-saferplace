import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IEmotionCarouselItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IEmotionCarouselItemStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 64,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    flex: 1,
    maxHeight: 240,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
  },
  title: {
    color: COLORS.PRIMARY_ORANGE,
    marginTop: 14,
    textAlign: 'center',
  },
});
