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
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    marginTop: 55,
    marginBottom: 30,
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: 250,
  },
  infoImage: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 18,
    backgroundColor: COLORS.BLACK,
  },
});
