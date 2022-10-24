import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IGroundingInputScreenStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IGroundingInputScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
    color: COLORS.BRILLIANT_WHITE,
  },
});
