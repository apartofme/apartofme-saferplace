import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IMenuButtonStyles {
  container: ViewStyle;
  title: TextStyle;
  imageContainer: ImageStyle;
}

export const styles = StyleSheet.create<IMenuButtonStyles>({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.LIGHT_GREY,
  },
  imageContainer: {
    marginRight: 17,
  },
});
