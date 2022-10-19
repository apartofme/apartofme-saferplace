import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

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
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: COLORS.LIGHT_GREY,
    marginTop: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: COLORS.LIGHT_GREY,
    marginBottom: 12,
  },
  avatar: {
    height: 80,
    width: 80,
    marginTop: -40,
    borderRadius: 99,
  },
  line: {
    borderWidth: 1,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  menuButtonContainer: {
    marginBottom: 40,
  },
  menuButtonLineContainer: {
    borderBottomWidth: 1,
    paddingBottom: 31,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  menuItemsContainer: {
    marginTop: 52,
  },
  logOutContainer: {
    alignItems: 'center',
    marginBottom: 34,
  },
  logOutTitle: {
    color: COLORS.PRIMARY_ORANGE,
    marginTop: 11,
  },
  topContainer: {
    paddingBottom: 34,
    backgroundColor: 'rgba(34,10,64, 0.4)',
  },
  topContentContainer: {
    paddingHorizontal: 24,
  },
  childName: {
    color: COLORS.PRIMARY_ORANGE,
  },
  parentName: {
    marginTop: 40,
    color: COLORS.PRIMARY_ORANGE,
  },
});
