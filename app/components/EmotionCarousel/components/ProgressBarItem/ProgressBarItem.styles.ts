import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IProgressBarItemStyles {
  container: ViewStyle;
  contentContainer: ViewStyle;
}

export const styles = StyleSheet.create<IProgressBarItemStyles>({
  container: {
    borderColor: COLORS.LIGHT_GREY,
    borderWidth: 1,
    borderRadius: 99,
    width: 8,
    height: 8,
    overflow: 'hidden',
    marginHorizontal: 4,
  },
  contentContainer: {
    borderRadius: 99,
    backgroundColor: COLORS.PRIMARY_ORANGE,
    flex: 1,
  },
});
