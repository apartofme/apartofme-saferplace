import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

import { WINDOW_COEFFICIENT } from '../../../constants/window';
import { COLORS } from '../../../themes/colors';

interface IDeleteAccountAcknowledgementScreenStyles {
  container: ViewStyle;
  nickname: TextStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imageContainer: ViewStyle;
}

export const styles =
  StyleSheet.create<IDeleteAccountAcknowledgementScreenStyles>({
    container: {
      alignItems: 'center',
    },
    imageContainer: {
      marginTop: 50 * WINDOW_COEFFICIENT,
    },
    nickname: {
      color: COLORS.PRIMARY_ORANGE,
      marginTop: 27 * WINDOW_COEFFICIENT,
    },
    title: {
      color: COLORS.BRILLIANT_WHITE,
      marginTop: 27 * WINDOW_COEFFICIENT,
    },
    subtitle: {
      color: COLORS.BRILLIANT_WHITE,
      marginTop: 24 * WINDOW_COEFFICIENT,
      textAlign: 'center',
      maxWidth: 295,
    },
  });
