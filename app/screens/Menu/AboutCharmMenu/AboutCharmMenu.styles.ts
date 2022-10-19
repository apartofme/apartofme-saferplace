import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IAboutCharmMenuScreenStyles {
  container: ViewStyle;
  subtitle: ViewStyle;
  title: TextStyle;
  list: ViewStyle;
  menuButtonContainer: ViewStyle;
}

export const styles = StyleSheet.create<IAboutCharmMenuScreenStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 48,
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    marginTop: 13,
  },
  list: {
    paddingTop: 50,
    flex: 1,
  },
  menuButtonContainer: {
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
