import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

export interface IAlertStyles {
  modalContainer: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ImageStyle;
}

export const styles = StyleSheet.create<IAlertStyles>({
  modalContainer: {
    flex: 1,
    backgroundColor: hexTransparency(COLORS.DARK_PURPLE, 95),
  },
  container: {
    paddingHorizontal: 16,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 4,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    paddingBottom: 48,
  },
  title: {
    marginTop: 56,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: 279,
    marginBottom: 32,
    color: COLORS.LIGHT_GREY,
  },
  imageContainer: {
    zIndex: 10,
    marginTop: 7,
    marginBottom: -30,
  },
});
