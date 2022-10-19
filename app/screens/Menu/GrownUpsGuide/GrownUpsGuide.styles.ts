import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IGrownUpsGuideScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  title: TextStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IGrownUpsGuideScreenStyles>({
  container: {
    marginLeft: 26,
    marginRight: 23,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 48,
    marginBottom: 68,
  },
  subtitle: {
    marginBottom: 30,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
