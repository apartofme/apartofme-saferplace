import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementSuccessivelyScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementSuccessivelyScreenStyles>({
    container: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 60,
      paddingHorizontal: 40,
    },
    title: {
      marginTop: 32,
      marginBottom: 24,
      textAlign: 'center',
    },
    image: {
      flex: 1,
      width: '100%',
    },
    description: {
      textAlign: 'center',
      minHeight: 120,
    },
  });
