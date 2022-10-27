import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IDancingTimerScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
}

export const styles = StyleSheet.create<IDancingTimerScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 40,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    paddingBottom: 24,
    textAlign: 'center',
  },
  button: {
    marginTop: 122,
  },
});
