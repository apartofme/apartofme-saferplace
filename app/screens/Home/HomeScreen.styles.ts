import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';

import { COLORS } from '../../themes/colors';

interface IHomeScreenStyles {
  body: ViewStyle;
  titleContainer: ViewStyle;
  logo: ImageStyle;
  formContainer: ViewStyle;
  description: TextStyle;
  dispatchTestButtonContainer: ViewStyle;
  dispatchTestButtonText: TextStyle;
}

export const styles = StyleSheet.create<IHomeScreenStyles>({
  body: {
    padding: 20,
    flex: 1,
  },

  formContainer: {
    flex: 1,
    marginVertical: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },

  description: {
    marginVertical: 16,
  },

  dispatchTestButtonContainer: {
    backgroundColor: COLORS.BLACK,
    padding: 16,
  },
  dispatchTestButtonText: {
    color: COLORS.WHITE,
  },
});
