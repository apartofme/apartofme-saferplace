import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export interface IRecognitionDoubleInteractionSuccessStyles {
  container: ViewStyle;
  image: ImageStyle;
}

export const styles =
  StyleSheet.create<IRecognitionDoubleInteractionSuccessStyles>({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 360,
      width: 250,
    },
  });
