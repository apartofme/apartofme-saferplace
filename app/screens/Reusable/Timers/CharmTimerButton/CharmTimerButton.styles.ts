import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';
import { hexTransparency } from '../../../../utils';

interface ICharmTimerButtonScreenStyles {
  container: ViewStyle;
  timer: ViewStyle;
  readLoudContainer: ViewStyle;
}

export const styles = StyleSheet.create<ICharmTimerButtonScreenStyles>({
  container: {
    paddingTop: 8,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  timer: {
    paddingVertical: 86,
  },
  readLoudContainer: {
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 70),
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 99,
    marginTop: 8,
  },
});
