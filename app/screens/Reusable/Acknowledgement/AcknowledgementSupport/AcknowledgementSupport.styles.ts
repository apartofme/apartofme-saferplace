import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  infoImage: ImageStyle;
}

export const styles = StyleSheet.create<IAcknowledgementSupportScreenStyles>({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginBottom: 25,
    textAlign: 'center',
  },
  // TODO: change to correct styles
  image: {
    flex: 1,
    width: '100%',
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
