import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementSuccessivelyDoubleButtonScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementSuccessivelyDoubleButtonScreenStyles>({
    container: {
      alignItems: 'center',
      paddingTop: 107,
      paddingHorizontal: 40,
    },
    // TODO: change to real styles
    image: {
      width: 191,
      height: 191,
      borderRadius: 100,
      backgroundColor: '#712CA4',
    },
    title: {
      marginTop: 54,
      marginBottom: 24,
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
    bottomButton: {
      alignSelf: 'center',
      marginBottom: 24,
    },
  });
