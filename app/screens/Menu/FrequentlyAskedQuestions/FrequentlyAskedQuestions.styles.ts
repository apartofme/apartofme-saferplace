import { StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IFAQSectionListStyles {
  container: ViewStyle;
  title: ViewStyle;
  listContainer: ViewStyle;
}

export const styles = StyleSheet.create<IFAQSectionListStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    color: COLORS.BRILLIANT_WHITE,
  },
  listContainer: {
    flex: 1,
    marginTop: 26,
  },
});
