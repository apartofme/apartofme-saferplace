import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../../constants/window';
import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface IAcknowledgementGroundingScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  readLoudContainer: ViewStyle;
  emptyView: ViewStyle;
}

export const styles = StyleSheet.create<IAcknowledgementGroundingScreenStyles>({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 295 * WINDOW_COEFFICIENT,
    alignItems: 'center',
  },
  title: {
    maxWidth: 295,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    maxWidth: 295,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 99,
    marginTop: 8,
    alignSelf: 'center',
  },
  emptyView: {
    height: 55,
  },
});
