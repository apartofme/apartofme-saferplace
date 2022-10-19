import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../../themes/colors';

interface IFAQSectionListStyles {
  container: ViewStyle;
  sectionListItemTitle: TextStyle;
  sectionListItemContainer: ViewStyle;
  sectionTitle: TextStyle;
}

export const styles = StyleSheet.create<IFAQSectionListStyles>({
  container: {
    flex: 1,
  },
  sectionListItemTitle: {
    color: COLORS.BRILLIANT_WHITE,
  },
  sectionTitle: {
    color: COLORS.PRIMARY_ORANGE,
    marginTop: 29,
  },
  sectionListItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingVertical: 30,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
});
