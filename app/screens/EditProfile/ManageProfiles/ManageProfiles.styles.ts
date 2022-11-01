import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../themes/colors';

interface IManageProfilesStyles {
  container: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IManageProfilesStyles>({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 15,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingLeft: 24,
    marginBottom: 30,
  },
});
