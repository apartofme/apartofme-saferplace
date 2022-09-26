import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IAlertStyles {
  container: ViewStyle;
  title: TextStyle;
  subtitle: TextStyle;
  imagesContainer: ViewStyle;
  image: ImageStyle;
}

export const styles = StyleSheet.create<IAlertStyles>({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 48,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 33,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 99,
  },
});
