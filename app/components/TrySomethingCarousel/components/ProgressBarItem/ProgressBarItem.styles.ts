import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IProgressBarItemStyles {
  container: ViewStyle;
  active: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IProgressBarItemStyles>({
  container: {
    borderColor: COLORS.BRILLIANT_WHITE,
    borderWidth: 1,
    borderRadius: 99,
    width: 8,
    height: 8,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  active: {
    borderWidth: 0,
  },
  contentContainer: {
    flex: 1,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY_ORANGE,
    backgroundColor: COLORS.PRIMARY_ORANGE,
  },
});
