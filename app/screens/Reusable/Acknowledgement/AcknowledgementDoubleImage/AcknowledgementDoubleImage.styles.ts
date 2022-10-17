import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementDoubleImageScreenStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  childImage: ImageStyle;
  title: TextStyle;
  description: TextStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageScreenStyles>({
    container: {
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingHorizontal: 40,
      paddingBottom: 73,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    // TODO: change to real styles
    image: {
      width: 160,
      height: 160,
      borderRadius: 100,
      backgroundColor: '#712CA4',
    },
    // TODO: change to real styles
    childImage: {
      backgroundColor: '#00DBC0',
    },
    title: {
      textAlign: 'center',
    },
    description: {
      minHeight: 100,
      textAlign: 'center',
    },
  });
