import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IDancingTimerScreenStyles {
  container: ViewStyle;
  illustration: ViewStyle;
  title: TextStyle;
  button: ViewStyle;
  seconds: TextStyle;
}

export const styles = StyleSheet.create<IDancingTimerScreenStyles>({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 40,
    paddingBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  illustration: {
    marginLeft: 8,
  },
  title: {
    color: COLORS.BRILLIANT_WHITE,
    marginTop: 30,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: { marginBottom: 30 },
  seconds: {
    color: COLORS.PRIMARY_ORANGE,
    marginBottom: 30,
    textAlign: 'center',
  },
});
