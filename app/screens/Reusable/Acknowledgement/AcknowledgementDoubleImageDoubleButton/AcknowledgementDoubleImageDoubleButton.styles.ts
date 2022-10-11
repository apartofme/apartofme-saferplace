import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IAcknowledgementDoubleImageDoubleButtonScreenStyles {
  container: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  childImage: ImageStyle;
  title: TextStyle;
  description: TextStyle;
  bottomButton: ViewStyle;
}

export const styles =
  StyleSheet.create<IAcknowledgementDoubleImageDoubleButtonScreenStyles>({
    container: {
      justifyContent: 'space-between',
      paddingTop: 40,
      paddingHorizontal: 40,
      paddingBottom: 60,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingBottom: 70,
    },
    // TODO: change to real styles
    image: {
      width: 152,
      height: 152,
      borderRadius: 100,
      backgroundColor: '#712CA4',
    },
    // TODO: change to real styles
    childImage: {
      marginLeft: -26,
      backgroundColor: '#00DBC0',
    },
    title: {
      textAlign: 'center',
    },
    description: {
      textAlign: 'center',
    },
    bottomButton: {
      marginBottom: 24,
      alignSelf: 'center',
    },
  });
