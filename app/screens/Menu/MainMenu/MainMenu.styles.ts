import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IMainMenuStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  avatar: ImageStyle;
  line: ViewStyle;
  menuButtonContainer: ViewStyle;
  menuButtonLineContainer: ViewStyle;
  menuItemsContainer: ViewStyle;
  logOutContainer: ViewStyle;
  logOutTitle: TextStyle;
  topContainer: ViewStyle;
  topContentContainer: ViewStyle;
  childName: TextStyle;
  parentName: TextStyle;
}

export const styles = StyleSheet.create<IMainMenuStyles>({
  container: {
    paddingHorizontal: 24 * WINDOW_COEFFICIENT,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 40 * WINDOW_COEFFICIENT,
    marginBottom: 16 * WINDOW_COEFFICIENT,
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    marginBottom: 12 * WINDOW_COEFFICIENT,
  },
  avatar: {
    height: 80,
    width: 80,
    marginLeft: 8,
    marginTop: -40,
    borderRadius: 99,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  menuButtonContainer: {
    marginBottom: 40 * WINDOW_COEFFICIENT,
  },
  menuButtonLineContainer: {
    borderBottomWidth: 1,
    paddingBottom: 31 * WINDOW_COEFFICIENT,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  menuItemsContainer: {
    paddingTop: 52 * WINDOW_COEFFICIENT,
  },
  logOutContainer: {
    alignItems: 'center',
    paddingTop: 20 * WINDOW_COEFFICIENT,
    marginBottom: 34 * WINDOW_COEFFICIENT,
  },
  logOutTitle: {
    color: COLORS.PRIMARY_ORANGE,
    marginTop: 11 * WINDOW_COEFFICIENT,
  },
  topContainer: {
    paddingBottom: 34 * WINDOW_COEFFICIENT,
    backgroundColor: COLORS.MENU_BACKGROUND,
  },
  topContentContainer: {
    paddingHorizontal: 24,
  },
  childName: {
    color: COLORS.PRIMARY_ORANGE,
  },
  parentName: {
    marginTop: 40 * WINDOW_COEFFICIENT,
    color: COLORS.PRIMARY_ORANGE,
  },
});
