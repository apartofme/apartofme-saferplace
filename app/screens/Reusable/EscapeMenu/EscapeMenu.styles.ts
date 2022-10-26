import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    marginTop: 24,
    marginBottom: 34,
  },
  contentContainer: {
    paddingHorizontal: 12,
    marginHorizontal: 24,
    paddingBottom: 32,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,

    borderRadius: 24,
  },
  button: {
    marginBottom: 16,
  },
  title: {
    width: 279,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
    marginTop: 52,
  },
  subtitle: {
    color: COLORS.BRILLIANT_WHITE,
    paddingHorizontal: 12,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
});
