import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

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
      marginTop: 50,
    },
    nickname: {
      color: COLORS.PRIMARY_ORANGE,
      marginTop: 27,
    },
    title: {
      color: COLORS.BRILLIANT_WHITE,
      marginTop: 27,
    },
    subtitle: {
      color: COLORS.BRILLIANT_WHITE,
      marginTop: 24,
      textAlign: 'center',
      maxWidth: 295,
    },
  });
