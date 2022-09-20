import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface ICharmAlertsScreenStyles {
  container: ViewStyle;
  image: ImageStyle;
  titleContainer: ViewStyle;
  title: TextStyle;
}

export const styles = StyleSheet.create<ICharmAlertsScreenStyles>({
  container: {
    paddingTop: 87,
    paddingHorizontal: 24,
  },
  // TODO: change to correct styles
  image: {
    width: 267,
    height: 132,
    zIndex: 1,
    alignSelf: 'center',
    marginBottom: -25,
  },
  // TODO: change to correct styles
  titleContainer: {
    paddingHorizontal: 24,
    paddingVertical: 76,
    backgroundColor: '#3C415C',
    borderRadius: 24,
  },
  title: {
    textAlign: 'center',
  },
});
