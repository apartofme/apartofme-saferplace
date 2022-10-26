import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface IAcknowledgementAlongEdgesStyles {
  container: ViewStyle;
  icon: ViewStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementAlongEdgesStyles>({
  container: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 76,
    marginBottom: 54,
    borderRadius: 100,
  },
  description: {
    flex: 1,
    maxHeight: 100,
    marginTop: 58,
    color: COLORS.BRILLIANT_WHITE,
    textAlign: 'center',
  },
});
