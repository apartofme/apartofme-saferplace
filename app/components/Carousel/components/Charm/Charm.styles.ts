import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ICharmStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ICharmStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 64,
    paddingBottom: 80,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 240,
    paddingVertical: 50,
    paddingHorizontal: 24,
    borderRadius: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
  },
  title: {
    paddingTop: 15,
    color: COLORS.PRIMARY_ORANGE,
    textAlign: 'center',
  },
});
