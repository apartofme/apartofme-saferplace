import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

import { COLORS } from '../../../../themes/colors';

interface ISignUpSuccessScreenStyles {
  background: ImageStyle;
  container: ViewStyle;
  title: ViewStyle;
  subtitle: ViewStyle;
}

export const styles = StyleSheet.create<ISignUpSuccessScreenStyles>({
  background: {
    resizeMode: 'contain',
    marginBottom: '50%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 80,
  },
  title: {
    paddingTop: 35,
    paddingBottom: 24,
    textAlign: 'center',
    color: COLORS.BRILLIANT_WHITE,
  },
  subtitle: {
    textAlign: 'center',
    minHeight: 80,
    color: COLORS.LIGHT_GREY,
  },
});
