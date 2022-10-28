import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { WINDOW_COEFFICIENT } from '../../../constants/window';

import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

export interface IEscapeMenuStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  backArrowImage: ImageStyle;
  contentContainer: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IEscapeMenuStyles>({
  container: {
    flex: 1,
    backgroundColor: hexTransparency(COLORS.DARK_PURPLE, 95),
  },
  imageContainer: {
    zIndex: 10,
    marginTop: 7,
    marginBottom: -30,
    alignSelf: 'center',
  },
  backArrowImage: {
    marginLeft: 15,
  },
  contentContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 24,
    paddingBottom: 32 * WINDOW_COEFFICIENT,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderRadius: 24,
  },
  button: {
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
  title: {
    width: 279,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
    marginTop: 52 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    paddingHorizontal: 12,
    textAlign: 'center',
    marginTop: 16 * WINDOW_COEFFICIENT,
    marginBottom: 32 * WINDOW_COEFFICIENT,
  },
});
