import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface ICharmBookMenuScreenStyles {
  mainContainer: ViewStyle;
  dialogueContainer: ViewStyle;
  icon: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  skipButton: ViewStyle;
  buttonCompleted: ViewStyle;
  empty: ViewStyle;
}

export const styles = StyleSheet.create<ICharmBookMenuScreenStyles>({
  mainContainer: {
    flex: 1,
    backgroundColor: hexTransparency(COLORS.DARK_PURPLE, 80),
    justifyContent: 'space-between',
  },
  dialogueContainer: {
    paddingTop: 60 * WINDOW_COEFFICIENT,
    paddingHorizontal: 16,
    marginHorizontal: 24,
    paddingBottom: 48 * WINDOW_COEFFICIENT,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  icon: {
    zIndex: 100,
    alignSelf: 'center',
    marginBottom: -40,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
  description: {
    paddingTop: 16 * WINDOW_COEFFICIENT,
    paddingBottom: 32 * WINDOW_COEFFICIENT,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
  skipButton: {
    marginTop: 30 * WINDOW_COEFFICIENT,
    alignSelf: 'center',
  },
  buttonCompleted: {
    marginHorizontal: 40,
    marginBottom: 24 * WINDOW_COEFFICIENT,
  },
  empty: {
    height: 56,
  },
});
