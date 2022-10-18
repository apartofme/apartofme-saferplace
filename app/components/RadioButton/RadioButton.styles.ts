import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { COLORS } from '../../themes/colors';
import { hexTransparency } from '../../utils';

export interface IRadioButtonStyles {
  container: ViewStyle;
  title: TextStyle;
  activeBackground: ViewStyle;
}

export const styles = StyleSheet.create<IRadioButtonStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingLeft: 24,
    marginBottom: 24,
    borderRadius: 24,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
  },

  activeBackground: {
    marginBottom: 22,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderWidth: 2,
  },
});
