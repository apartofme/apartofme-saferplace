import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface IGroundingInstructionScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  instructionContainer: ViewStyle;
  instructionTitle: TextStyle;
}

export const styles = StyleSheet.create<IGroundingInstructionScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 49,
    color: COLORS.BRILLIANT_WHITE,
  },
  instructionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 16,
    backgroundColor: hexTransparency(COLORS.PRIMARY_PURPLE, 90),
    borderRadius: 24,
  },
  instructionTitle: {
    flex: 1,
    paddingLeft: 16,
    color: COLORS.BRILLIANT_WHITE,
  },
});
