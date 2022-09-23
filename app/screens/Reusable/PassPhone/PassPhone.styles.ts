import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IPassPhoneScreenStyles {
  container: ViewStyle;
  title: TextStyle;
  avatar: ImageStyle;
  description: TextStyle;
}

export const styles = StyleSheet.create<IPassPhoneScreenStyles>({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 40,
  },
  title: {
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  avatar: {
    width: 200,
    height: 200,
    marginVertical: 75,
    borderRadius: 100,
    // TODO: change to real styles
    backgroundColor: '#AA82E0',
  },
  description: {
    textAlign: 'center',
  },
});
