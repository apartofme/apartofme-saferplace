import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ISelectSoundScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  startButtonContainer: ViewStyle;
  titleContainer: ViewStyle;
}

export const styles = StyleSheet.create<ISelectSoundScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginBottom: 16,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 54,
  },
  startButtonContainer: {
    marginHorizontal: 25,
  },
  titleContainer: {
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
});
