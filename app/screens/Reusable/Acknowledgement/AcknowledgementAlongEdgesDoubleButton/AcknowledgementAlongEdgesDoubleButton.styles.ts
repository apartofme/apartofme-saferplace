import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementAlongEdgesDoubleButtonScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  image: ImageStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementAlongEdgesDoubleButtonScreenStyles>({
    container: {
      paddingTop: 40,
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
    },
    image: {
      width: 191,
      height: 191,
      marginTop: 76,
      marginBottom: 54,
      borderRadius: 100,
    },
    description: {
      textAlign: 'center',
    },
    bottomButton: {
      alignSelf: 'center',
      marginBottom: 24,
    },
  });
