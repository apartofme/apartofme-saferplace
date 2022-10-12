import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementLargeTitleScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<IAcknowledgementLargeTitleScreenStyles>(
  {
    container: {
      flex: 1,
      paddingTop: 24,
      alignItems: 'center',
    },
    image: {
      height: 372,
      resizeMode: 'contain',
      marginBottom: 48,
    },
    title: {
      textAlign: 'center',
    },
  },
);
