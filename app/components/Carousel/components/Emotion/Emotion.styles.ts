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
    justifyContent: 'flex-end',
    paddingHorizontal: 64,
    paddingBottom: 48,
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
  },
  title: {
    marginTop: 16,
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
  },
});
