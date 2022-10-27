import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
  infoImage: ImageStyle;
}

export const styles = StyleSheet.create<IAcknowledgementSupportScreenStyles>({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    maxWidth: 327,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
    maxWidth: 295,
    paddingTop: 20,
  },
  // TODO: change to correct styles
  imageContainer: {
    paddingBottom: 34,
  },
  infoImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 20,
    backgroundColor: COLORS.BLACK,
  },
});
