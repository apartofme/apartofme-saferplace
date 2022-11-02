import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IIconDescriptionStyles {
  container: ViewStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IIconDescriptionStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  subtitle: {
    flex: 1,
    maxHeight: 120,
    paddingTop: 40,
    textAlign: 'center',
    color: COLORS.LIGHT_GREY,
  },
});
