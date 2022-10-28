import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface IAcknowledgementReadLoudScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  readLoudContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAcknowledgementReadLoudScreenStyles>({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 32,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 99,
    marginTop: 8,
  },
});
