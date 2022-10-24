import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';
import { hexTransparency } from '../../../utils';

interface ICharmBookMenuScreenStyles {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  dialogueContainer: ViewStyle;
  icon: ViewStyle;
  title: TextStyle;
  description: TextStyle;
  skipButton: ViewStyle;
  buttonCompleted: ViewStyle;
}

export const styles = StyleSheet.create<ICharmBookMenuScreenStyles>({
  mainContainer: {
    flex: 1,
    backgroundColor: hexTransparency(COLORS.DARK_PURPLE, 80),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 78,
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
  dialogueContainer: {
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 48,
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
    paddingTop: 16,
    paddingBottom: 32,
    color: COLORS.LIGHT_GREY,
    textAlign: 'center',
  },
  skipButton: {
    marginTop: 30,
    alignSelf: 'center',
  },
  buttonCompleted: {
    marginHorizontal: 40,
  },
});
