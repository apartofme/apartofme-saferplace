import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ITimerTitleButtonScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<ITimerTitleButtonScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 24,
  },
  // TODO: remove
  image: {
    height: 280,
    width: 155,
  },
  title: {
    marginTop: 40,
    marginBottom: 24,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    flex: 1,
    maxHeight: 80,
    marginBottom: 66,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
});
