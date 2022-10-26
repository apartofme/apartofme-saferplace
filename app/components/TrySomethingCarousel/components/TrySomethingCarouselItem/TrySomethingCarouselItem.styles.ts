import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

export interface IOnlyImageStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
}

export const styles = StyleSheet.create<IOnlyImageStyles>({
  container: {
    height: 279,
    width: 247,
    borderRadius: 24,
    paddingHorizontal: 24,
    backgroundColor: COLORS.PRIMARY_PURPLE,
    borderColor: COLORS.PRIMARY_ORANGE,
    borderWidth: 2,
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    marginVertical: 16,
    color: COLORS.PRIMARY_ORANGE,
    textAlign: 'center',
  },
  subtitle: {
    color: COLORS.LIGHT_ORANGE,
    textAlign: 'center',
  },
});
