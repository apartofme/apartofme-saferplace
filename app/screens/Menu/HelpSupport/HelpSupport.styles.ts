import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IHelpSupportScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IHelpSupportScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 48,
  },
  list: {
    marginTop: 50,
    flex: 1,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
