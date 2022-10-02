import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface ISelectDrawBuildScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  listItemContainer: ViewStyle;
  listItemTitle: TextStyle;
  listItemImage: ImageStyle;
  activeBorder: ViewStyle;
  button: ViewStyle;
  maw200: ViewStyle;
}

export const styles = StyleSheet.create<ISelectDrawBuildScreenStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    paddingBottom: 36,
  },
  // TODO: change to correct styles
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    marginBottom: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: COLORS.BLACK,
    backgroundColor: '#3C415C',
  },
  listItemTitle: {
    paddingBottom: 12,
  },
  // TODO: change to correct styles
  listItemImage: {
    width: 76,
    height: 76,
    borderRadius: 50,
    backgroundColor: '#AA82E0',
  },
  // TODO: change to correct styles
  activeBorder: {
    borderColor: '#AA82E0',
  },
  button: {
    marginHorizontal: 40,
    marginBottom: 24,
  },
  maw200: {
    maxWidth: 200,
  },
});
