import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IOnlyImageStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 64,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 35,
    paddingHorizontal: 24,
    maxHeight: 240,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
  },
  image: {
    height: 120,
    width: 92,
  },
  title: {
    paddingTop: 15,
    textAlign: 'center',
    color: COLORS.PRIMARY_ORANGE,
  },
});
